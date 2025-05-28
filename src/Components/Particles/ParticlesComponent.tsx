import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from '@tsparticles/react';
import {
    type Container,
} from "@tsparticles/engine";
import { loadFull } from "tsparticles";

type ParticlesComponentTypes = {
    particlesOptions: any;
    className: string;
    id: string;
}

function ParticlesComponent({ particlesOptions, className, id}: ParticlesComponentTypes) {
    const [init, setInit] = useState<boolean>(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = useCallback(async (container?: Container): Promise<void> => {
        console.log(container);
    }, []);

    if (init) {
        return (
            <Particles
                id={id}
                className={className}
                particlesLoaded={particlesLoaded}
                options={particlesOptions}
            />
        );
    }

    return <></>;
}

export default ParticlesComponent;
