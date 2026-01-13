import React from "react";
import IconLink from "./IconLink";
import { Box, Typography } from "@mui/material";
import "./PortfolioBlock.css";

function PortfolioBlock(props) {
  const { image, source, title, description, tools = [] } = props;

  return (
    <Box
      className="portfolio-block"
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{ textAlign: "center", p: 2 }}
    >
      {/* Image + Overlay */}
      <Box className="image-container">
        <img src={image} alt={title} className="portfolio-image" />

        <Box className="overlay">
          <Typography variant="body1" className="overlay-text">
            {description}
          </Typography>

          {/* Tools row */}
          <Box className="tool-row">
            {tools.map((tool, index) => (
              <img
                key={index}
                src={tool}
                alt="tool logo"
                className="tool-logo"
              />
            ))}
          </Box>
        </Box>
      </Box>

      {/* Title */}
      <h2 className="portfolio-title">{title}</h2>

      {/* Link button */}
      <Box
        className="portfolio-links"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="0.5rem"
        fontSize="1.2rem"
      >
        <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
          <IconLink link={source} title={"Source Code"} icon={"fa fa-code"} />
        </Box>
      </Box>
    </Box>
  );
}

export default PortfolioBlock;
