import React, { useState, useEffect } from "react";
import WorksItem from "./WorksItem";
import { projectsData, projectNav } from "./Data";
const Works = () => {
    const [item, setItem] = useState({ name: "all" });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (item.name === "all") {
            setProjects(projectsData);
        } else {
            const newProjects = projectsData.filter(
                (project) => project.category === item.name
            );
            setProjects(newProjects);
        }
    }, [item]);

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent });
        setActive(index);
    };

    return (
        <>
            <div className="work__filters">
                {projectNav.map((item, index) => {
                    return (
                        <span
                            className={`${
                                active === index ? "active-work" : ""
                            } work__item`}
                            key={index}
                            onClick={(e) => {
                                handleClick(e, index);
                            }}
                        >
                            {item.name}
                        </span>
                    );
                })}
            </div>

            <div className="work__container container grid">
                {projects.map((item) => {
                    return <WorksItem item={item} key={item.id} />;
                })}
            </div>
        </>
    );
};

export default Works;
