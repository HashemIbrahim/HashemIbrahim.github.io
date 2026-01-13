import React, { useMemo, useState, useEffect } from "react";
import "./TerminalPortfolio.css";
import { info } from "../../info/Info";

export default function TerminalPortfolio({ innerRef, sectionId = "portfolio" }) {
  const data = info.portfolio || [];

  const [query, setQuery] = useState("");
  const [activeId, setActiveId] = useState(data[0]?.id || data[0]?.title);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return data;
    return data.filter((p) =>
      [
        p.title,
        p.tagline,
        (p.tools || []).map((t) => (t.name || t)).join(" "),
        (p.authors || []).map((a) => (a.name || a)).join(" "),
      ]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [query, data]);

  const active = useMemo(
    () => filtered.find((p) => (p.id || p.title) === activeId) || filtered[0],
    [filtered, activeId]
  );

  useEffect(() => {
    if (!active && filtered[0]) setActiveId(filtered[0].id || filtered[0].title);
  }, [filtered, active]);

  return (
    <section id={sectionId} ref={innerRef} className="tp-page">
      {/* LEFT: terminal list */}
      <div className="tp-terminal">
        <div className="tp-titlebar">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
          <span className="title">hashem@portfolio:~</span>
        </div>

        <div className="tp-body">
          <div className="prompt">
            <span className="user">hashem</span>@<span className="host">ibrahim</span>:~$ ls projects
          </div>

          <div className="search">
            <span className="prompt-line">$ grep "</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="type to filter…"
            />
            <span className="prompt-line">"</span>
          </div>

          <ul
            className="list"
            tabIndex={0}
            onKeyDown={(e) => {
              const idx = filtered.findIndex(
                (p) => (p.id || p.title) === active?.id || (p.id || p.title) === activeId
              );
              if (e.key === "ArrowDown")
                setActiveId(
                  filtered[Math.min(idx + 1, filtered.length - 1)]?.id ||
                    filtered[Math.min(idx + 1, filtered.length - 1)]?.title
                );
              if (e.key === "ArrowUp")
                setActiveId(
                  filtered[Math.max(idx - 1, 0)]?.id ||
                    filtered[Math.max(idx - 1, 0)]?.title
                );
            }}
          >
            {filtered.map((p) => {
              const id = p.id || p.title;
              return (
                <li
                  key={id}
                  className={id === (active?.id || activeId) ? "active" : ""}
                  onClick={() => setActiveId(id)}
                >
                  <span className="chev">▸</span>
                  <span className="proj-name">{p.title}</span>
                  {p.tagline && <span className="dim"> — {p.tagline}</span>}
                </li>
              );
            })}
            {filtered.length === 0 && <li className="dim">no matches</li>}
          </ul>

          <div className="cursor">▋</div>
        </div>
      </div>

      {/* RIGHT: details */}
      <div className="tp-detail">
        {active && (
          <div className="card">
            <header>
              <h1>{active.title}</h1>
              {active.tagline && <p className="tagline">{active.tagline}</p>}
            </header>

            {active.image && (
              <div className="media">
                <img src={active.image} alt={active.title} />
              </div>
            )}

            <div className="meta">
              {(active.repo || active.source) && (
                <a
                  className="repo-link"
                  href={active.repo || active.source}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="mono">$ open</span>{" "}
                  <span className="repo">{active.repo || active.source}</span>
                </a>
              )}

              {active.authors?.length ? (
                <section>
                  <h3>authors</h3>
                  <div className="chips">
                    {active.authors.map((a, i) => {
                      const name = a.name || a;
                      const link = a.link || (typeof a === "string" ? undefined : a.link);
                      return link ? (
                        <a key={i} href={link} target="_blank" rel="noreferrer" className="chip">
                          {name}
                        </a>
                      ) : (
                        <span key={i} className="chip">{name}</span>
                      );
                    })}
                  </div>
                </section>
              ) : null}

              {active.tools?.length ? (
                <section>
                  <h3>tools</h3>
                  <div className="tools">
                    {active.tools.map((t, i) => {
                      const name = t.name || t;
                      const icon = t.icon;
                      return (
                        <span key={i} className="tool">
                          {icon
                            ? icon.startsWith("devicon-")
                              ? <i className={`${icon} colored`} aria-hidden />
                              : <img src={icon} alt={name} />
                            : null}
                          <span>{name}</span>
                        </span>
                      );
                    })}
                  </div>
                </section>
              ) : null}

              {active.usage?.length ? (
                <section>
                  <h3>usage</h3>
                  <ul className="bullets">
                    {active.usage.map((u, i) => <li key={i}>{u}</li>)}
                  </ul>
                </section>
              ) : null}

              {active.lessons?.length ? (
                <section>
                  <h3>lessons learned</h3>
                  <ul className="bullets">
                    {active.lessons.map((l, i) => <li key={i}>{l}</li>)}
                  </ul>
                </section>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
