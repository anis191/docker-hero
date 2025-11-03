import React from 'react';
import { Route, Routes } from 'react-router';
import Home from '../pages/Home';
import MainLayout from '../layouts/MainLayouts';
import BasicDockerCommands from '../pages/Commands';
import DocumentationLinks from '../pages/Documentation';
import About from '../pages/About';
import DockerTutorial from '../pages/DockerTutorial';

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path='/' element={<Home />} />
                <Route path="commands" element={<BasicDockerCommands />}/>
                <Route path="documentation" element={<DocumentationLinks />}/>
                <Route path="about" element={<About />}/> 
                <Route path="tutorial" element={<DockerTutorial />}/>
            </Route>
        </Routes>
    );
};

export default AppRoutes;