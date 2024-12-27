// Example question sets for Physics, Chemistry, and Math
let correctAnswers = {
    physics: {
        1: [
            { 
                question: "Q1 (2020): A body is projected from the ground with initial velocity u at an angle θ to the horizontal. The maximum height reached by the body is H. The horizontal range of the projectile is R. What is the relation between H and R when the projectile is at an angle 45°?", 
                answer: "B.", 
                options: ["A. H = R", "B. H = R/2", "C. H = 2R", "D. H = R^2/2"] 
            },
            { 
                question: "Q2 (2020): A body of mass m is moving with a velocity v in a circular path of radius r. The centripetal force on the body is:", 
                answer: "A.", 
                options: ["A. mv²/r", "B. m/r²", "C. v²/r", "D. mvr"] 
            },
            { 
                question: "Q3 (2021): The magnetic field at the center of a circular loop of current carrying wire is given by B = μ₀ I / 2r. If the radius of the loop is halved, what happens to the magnetic field at the center?", 
                answer: "B.", 
                options: ["A. The field is halved", "B. The field is doubled", "C. The field remains the same", "D. The field increases by a factor of 4"] 
            },
            { 
                question: "Q4 (2021): If the wavelength of light passing through a medium is halved, the refractive index of the medium will:", 
                answer: "A.", 
                options: ["A. Remain the same", "B. Double", "C. Be halved", "D. Increases by a factor of √2"] 
            },
            { 
                question: "Q5 (2022): The time period of a simple pendulum is given by T = 2π√(L/g), where L is the length of the pendulum and g is the acceleration due to gravity. If the length of the pendulum is increased by 4 times, the time period will:", 
                answer: "B.", 
                options: ["A. Increase by 2 times", "B. Increase by 4 times", "C. Increase by √2", "D. Increase by 2√2"] 
            },
            { 
                question: "Q6 (2022): The energy stored in a spring is given by U = (1/2)kx². If the displacement is doubled, the energy stored in the spring will be:", 
                answer: "B.", 
                options: ["A. Same", "B. Four times", "C. Twice", "D. Half"] 
            },
            { 
                question: "Q7 (2023): The rate of change of momentum of a body is equal to:", 
                answer: "C.", 
                options: ["A. The velocity of the body", "B. The force applied on the body", "C. The net external force acting on the body", "D. The acceleration of the body"] 
            },
            { 
                question: "Q8 (2023): In a thermodynamic process, the work done on the gas is 100 J. The heat energy absorbed by the gas is 200 J. The change in internal energy of the gas is:", 
                answer: "C.", 
                options: ["A. 300 J", "B. 100 J", "C. 200 J", "D. 50 J"] 
            },
            { 
                question: "Q9 (2020): If the current is doubled in a resistor, what happens to the power dissipated in it?", 
                answer: "C.", 
                options: ["A. Power is halved", "B. Power remains the same", "C. Power increases by a factor of 4", "D. Power increases by a factor of 2"] 
            },
            { 
                question: "Q10 (2021): The time period of a simple harmonic oscillator depends on its:", 
                answer: "D.", 
                options: ["A. Mass", "B. Amplitude", "C. Frequency", "D. Length and mass"] 
            }
        ],
        
        2: [
            { 
                question: "Q1 (2021): A body is dropped from a height. The time it takes to reach the ground depends on:", 
                answer: "D.", 
                options: ["A. Only on the height", "B. Only on the mass of the body", "C. Only on the acceleration due to gravity", "D. On both the height and acceleration due to gravity"] 
            },
            { 
                question: "Q2 (2022): The force acting on a body is proportional to the square of its velocity. If the initial velocity of the body is v₀, the velocity after time t will be:", 
                answer: "A.", 
                options: ["A. v = v₀ e^(kt)", "B. v = v₀ e^(-kt)", "C. v = v₀ + kt", "D. v = v₀ - kt"] 
            },
            { 
                question: "Q3 (2023): The power dissipated in a resistor is given by P = I²R. If the current is doubled, the power dissipated will be:", 
                answer: "C.", 
                options: ["A. P", "B. 2P", "C. 4P", "D. P/2"] 
            },
            { 
                question: "Q4 (2020): The time period of a pendulum of length L is given by T = 2π√(L/g). If the length of the pendulum is tripled, the new time period will be:", 
                answer: "A.", 
                options: ["A. 3T", "B. 2T", "C. T", "D. T/3"] 
            },
            { 
                question: "Q5 (2021): The refractive index of a medium is defined as the ratio of:", 
                answer: "A.", 
                options: ["A. Speed of light in vacuum to speed of light in the medium", "B. Wavelength of light in vacuum to wavelength of light in the medium", "C. Speed of light in the medium to speed of light in vacuum", "D. None of the above"] 
            },
            { 
                question: "Q6 (2022): A current-carrying conductor is placed in a magnetic field. The force on the conductor depends on:", 
                answer: "C.", 
                options: ["A. The current", "B. The length of the conductor", "C. The angle between the current and magnetic field", "D. All of the above"] 
            },
            { 
                question: "Q7 (2023): If the frequency of a wave is doubled, what happens to its wavelength?", 
                answer: "B.", 
                options: ["A. Wavelength is halved", "B. Wavelength is halved", "C. Wavelength remains the same", "D. Wavelength doubles"] 
            },
            { 
                question: "Q8 (2020): The power of a lens is measured in:", 
                answer: "D.", 
                options: ["A. Dioptres", "B. Metres", "C. Joules", "D. Watts"] 
            },
            { 
                question: "Q9 (2022): In a sound wave, the particles of the medium oscillate:", 
                answer: "A.", 
                options: ["A. Parallel to the direction of wave propagation", "B. Perpendicular to the direction of wave propagation", "C. At a constant speed", "D. At increasing speed"] 
            },
            { 
                question: "Q10 (2021): The motion of a body under the influence of gravitational force near the surface of the Earth is:", 
                answer: "C.", 
                options: ["A. Uniform", "B. Uniformly accelerated", "C. Simple harmonic", "D. None of the above"] 
            }
        ],
        3: [
            { 
                question: "Q1 (2021): A particle moves in a circle of radius r with constant speed v. The acceleration of the particle is:", 
                answer: "A.", 
                options: ["A. v²/r", "B. r/v", "C. v/r", "D. v²"] 
            },
            { 
                question: "Q2 (2020): The pressure of a gas is increased. If the temperature is kept constant, the volume of the gas will:", 
                answer: "C.", 
                options: ["A. Increase", "B. Decrease", "C. Decrease inversely", "D. Remain the same"] 
            },
            { 
                question: "Q3 (2022): The moment of inertia of a solid sphere about an axis through its center is:", 
                answer: "B.", 
                options: ["A. (2/3)mr²", "B. (2/5)mr²", "C. (1/2)mr²", "D. mr²"] 
            },
            { 
                question: "Q4 (2023): In an ideal gas, the internal energy depends only on:", 
                answer: "A.", 
                options: ["A. Temperature", "B. Pressure", "C. Volume", "D. Density"] 
            },
            { 
                question: "Q5 (2021): The effective resistance between two points in a parallel combination of resistors is:", 
                answer: "D.", 
                options: ["A. The sum of the individual resistances", "B. The difference of the individual resistances", "C. The reciprocal of the sum of the reciprocals", "D. The reciprocal of the sum of the reciprocals"] 
            },
            { 
                question: "Q6 (2022): The energy stored in a capacitor is given by E = (1/2)CV². If the voltage is doubled, the energy stored in the capacitor will:", 
                answer: "B.", 
                options: ["A. Remain the same", "B. Quadruple", "C. Double", "D. Be halved"] 
            },
            { 
                question: "Q7 (2023): The power dissipated by a resistor is proportional to:", 
                answer: "C.", 
                options: ["A. Voltage", "B. Current", "C. The square of the current", "D. The square of the voltage"] 
            },
            { 
                question: "Q8 (2020): A parallel plate capacitor is connected to a battery. If the distance between the plates is increased, the capacitance will:", 
                answer: "B.", 
                options: ["A. Increase", "B. Decrease", "C. Remain unchanged", "D. Increase inversely"] 
            },
            { 
                question: "Q9 (2021): The force on a moving charged particle in a magnetic field is maximum when:", 
                answer: "A.", 
                options: ["A. The angle between the velocity and the magnetic field is 90°", "B. The angle between the velocity and the magnetic field is 0°", "C. The particle moves parallel to the field", "D. The particle moves opposite to the field"] 
            },
            { 
                question: "Q10 (2022): A bullet is fired with an initial velocity of 30 m/s at an angle of 30° to the horizontal. What will be the time of flight?", 
                answer: "C.", 
                options: ["A. 2.5 seconds", "B. 3.5 seconds", "C. 5.1 seconds", "D. 7.0 seconds"] 
            }
        ],
        4: [
            { 
                question: "Q1 (2020): A particle moves in a circular path under a central force. The force acting on the particle is inversely proportional to the cube of the distance from the center. What is the time period of the particle?", 
                answer: "C.", 
                options: ["A. Proportional to r", "B. Proportional to r²", "C. Proportional to r^(3/2)", "D. Proportional to r³"] 
            },
            { 
                question: "Q2 (2021): A spring with spring constant k is stretched by a distance x. If the spring is cut into two equal halves, what is the spring constant of each half?", 
                answer: "A.", 
                options: ["A. 2k", "B. k/2", "C. k", "D. 4k"] 
            },
            { 
                question: "Q3 (2022): The energy required to change the radius of a charged spherical conductor is proportional to:", 
                answer: "D.", 
                options: ["A. R", "B. R²", "C. R³", "D. R⁴"] 
            },
            { 
                question: "Q4 (2023): A uniform disk is rotating about an axis through its center. If its rotational inertia is I and its angular velocity is ω, what is the kinetic energy of the disk?", 
                answer: "B.", 
                options: ["A. (1/2)Iω", "B. (1/2)Iω²", "C. Iω", "D. Iω/2"] 
            },
            { 
                question: "Q5 (2020): A long solenoid has n turns per unit length and carries a current I. The magnetic field at a point inside the solenoid is:", 
                answer: "A.", 
                options: ["A. μ₀ n I", "B. μ₀ I", "C. μ₀ n I/2", "D. μ₀ n I²"] 
            },
            { 
                question: "Q6 (2021): In a Young’s double slit experiment, the distance between the slits is d and the distance from the slits to the screen is L. If the wavelength of light is λ, what is the separation between the central maximum and the first-order maximum?", 
                answer: "B.", 
                options: ["A. λL/d", "B. λL/2d", "C. 2λL/d", "D. λd/L"] 
            },
            { 
                question: "Q7 (2022): In a progressive wave, the displacement y at a point varies with time t and position x as y = A sin(kx - ωt). The wave velocity is:", 
                answer: "C.", 
                options: ["A. Aω/k", "B. Aω/k²", "C. ω/k", "D. k/ω"] 
            },
            { 
                question: "Q8 (2023): The resistance of a wire is 4Ω. If the length of the wire is doubled and its cross-sectional area is halved, what will be the new resistance?", 
                answer: "C.", 
                options: ["A. 2Ω", "B. 4Ω", "C. 16Ω", "D. 8Ω"] 
            },
            { 
                question: "Q9 (2020): A uniform electric field E exists between two parallel plates separated by a distance d. A charged particle of charge q and mass m is projected with velocity v parallel to the plates. The particle will:", 
                answer: "A.", 
                options: ["A. Follow a parabolic path", "B. Move in a straight line", "C. Move in a circular path", "D. Accelerate along the field lines"] 
            },
            { 
                question: "Q10 (2021): A body of mass m is placed at the edge of a vertical circular path of radius r. The minimum speed required for the body to complete the circular motion is:", 
                answer: "B.", 
                options: ["A. √(rg)", "B. √(5rg)", "C. √(3rg)", "D. √(2rg)"] 
            }
        ],
        5: [
            { 
                question: "Q1 (2020): A body of mass m is thrown vertically upwards with initial velocity u. The time taken for the body to reach the maximum height is:", 
                answer: "B.", 
                options: ["A. u/g", "B. u/2g", "C. 2u/g", "D. u/g²"] 
            },
            { 
                question: "Q2 (2021): A bullet is fired into a block of wood. The block is free to move on a frictionless surface. If the bullet embeds itself in the block, the final velocity of the system is:", 
                answer: "D.", 
                options: ["A. m₁v₁ + m₂v₂", "B. (m₁v₁ + m₂v₂)²", "C. (m₁ + m₂)v", "D. Conserved due to momentum"] 
            },
            { 
                question: "Q3 (2022): A charged particle enters a magnetic field perpendicular to the field lines with velocity v. The radius of the circular path followed by the particle is:", 
                answer: "C.", 
                options: ["A. mv/qB", "B. qvB/m", "C. mv/qB", "D. v/qB"] 
            },
            { 
                question: "Q4 (2023): A copper wire is stretched to increase its length by 0.5%. The change in its resistance is approximately:", 
                answer: "A.", 
                options: ["A. 1%", "B. 0.5%", "C. 2%", "D. 0.25%"] 
            },
            { 
                question: "Q5 (2021): A plane wave of light passes from air to water. If the refractive index of water is 1.33, the angle of refraction in water when the angle of incidence in air is 30° is:", 
                answer: "B.", 
                options: ["A. 20.0°", "B. 22.3°", "C. 30.0°", "D. 15.0°"] 
            },
            { 
                question: "Q6 (2022): In a thin lens formula, if the object is placed at a distance twice the focal length from a converging lens, the image formed will be:", 
                answer: "A.", 
                options: ["A. At a distance equal to the focal length", "B. At twice the focal length", "C. At infinity", "D. At a distance greater than twice the focal length"] 
            },
            { 
                question: "Q7 (2023): A particle oscillates with a frequency of 50 Hz. The time period of oscillation is:", 
                answer: "C.", 
                options: ["A. 0.2 s", "B. 0.05 s", "C. 0.02 s", "D. 0.5 s"] 
            },
            { 
                question: "Q8 (2021): The minimum energy required to ionize a hydrogen atom is:", 
                answer: "D.", 
                options: ["A. 13.6 eV", "B. 27.2 eV", "C. 6.8 eV", "D. 13.6 eV (first ionization energy)"] 
            },
            { 
                question: "Q9 (2022): A sound wave of frequency 1000 Hz travels through a medium with a velocity of 340 m/s. The wavelength of the wave is:", 
                answer: "B.", 
                options: ["A. 3.4 m", "B. 0.34 m", "C. 34 m", "D. 340 m"] 
            },
            { 
                question: "Q10 (2023): Two capacitors of capacitance 2 µF and 3 µF are connected in series. The equivalent capacitance of the combination is:", 
                answer: "C.", 
                options: ["A. 5 µF", "B. 6 µF", "C. 1.2 µF", "D. 0.8 µF"] 
            }
        ],
        6: [
            { 
                question: "Q1 (2020): A capacitor is connected to a battery and charged. If the battery is then disconnected, what will happen to the potential difference across the plates if the plates are pulled apart?", 
                answer: "B.", 
                options: ["A. It decreases", "B. It increases", "C. It remains the same", "D. It becomes zero"] 
            },
            { 
                question: "Q2 (2021): A uniform rod of length L is rotating with angular velocity ω about an axis passing through its center. The kinetic energy of rotation is:", 
                answer: "C.", 
                options: ["A. (1/2)mω²L²", "B. (1/2)mω²L", "C. (1/2)Iω²", "D. mLω²"] 
            },
            { 
                question: "Q3 (2022): The magnetic field at the center of a circular loop of radius r carrying a current I is B. If the radius is doubled, what happens to the magnetic field at the center?", 
                answer: "D.", 
                options: ["A. It is halved", "B. It is doubled", "C. It becomes four times", "D. It is quartered"] 
            },
            { 
                question: "Q4 (2023): In an ideal gas, the internal energy depends only on:", 
                answer: "A.", 
                options: ["A. Temperature", "B. Volume", "C. Pressure", "D. Density"] 
            },
            { 
                question: "Q5 (2021): A current-carrying wire is bent in the shape of a circular loop of radius r. The magnetic field at the center of the loop is:", 
                answer: "C.", 
                options: ["A. μ₀I/2r", "B. μ₀I/r", "C. μ₀I/2r", "D. μ₀I/r²"] 
            },
            { 
                question: "Q6 (2022): A light wave is incident on a surface with angle of incidence i. The angle of refraction is r. The refractive index is n. The relation between angles is:", 
                answer: "A.", 
                options: ["A. n = sin(i)/sin(r)", "B. n = sin(r)/sin(i)", "C. n = cos(i)/cos(r)", "D. n = cos(r)/cos(i)"] 
            },
            { 
                question: "Q7 (2023): In a thermodynamic process, a gas expands from a volume V₁ to a volume V₂ at constant temperature. The work done by the gas is:", 
                answer: "B.", 
                options: ["A. P(V₂ - V₁)", "B. nRT ln(V₂/V₁)", "C. nR ln(V₂/V₁)", "D. 0"] 
            },
            { 
                question: "Q8 (2021): A body of mass m is moving with velocity v. The kinetic energy of the body is:", 
                answer: "C.", 
                options: ["A. m²v²", "B. mv²", "C. (1/2)mv²", "D. (1/4)mv²"] 
            },
            { 
                question: "Q9 (2022): A ray of light passes through a glass slab of thickness d and refractive index n. If the ray is incident at an angle θ, the apparent thickness of the slab is:", 
                answer: "D.", 
                options: ["A. d/n", "B. dn", "C. d/sin(θ)", "D. d/n cos(θ)"] 
            },
            { 
                question: "Q10 (2023): The half-life of a radioactive substance is T. The time required for its activity to decrease to 1/8th of its initial value is:", 
                answer: "A.", 
                options: ["A. 3T", "B. 2T", "C. T", "D. 4T"] 
            }
        ],
        7: [
            { 
                question: "Q1 (2020): The potential energy of a spring is U when stretched by a distance x. What is the potential energy when the spring is stretched by 2x?", 
                answer: "C.", 
                options: ["A. U", "B. 2U", "C. 4U", "D. 8U"] 
            },
            { 
                question: "Q2 (2021): A particle moves with simple harmonic motion with amplitude A. The time period of the motion is T. The maximum speed of the particle is:", 
                answer: "B.", 
                options: ["A. A/T", "B. Aω", "C. A/T²", "D. ω²A"] 
            },
            { 
                question: "Q3 (2022): The capacitance of a parallel-plate capacitor is C₀. If the distance between the plates is halved and the area of the plates is doubled, the new capacitance is:", 
                answer: "A.", 
                options: ["A. 2C₀", "B. C₀", "C. C₀/2", "D. 4C₀"] 
            },
            { 
                question: "Q4 (2023): A charged particle moves through a uniform magnetic field in a direction perpendicular to the field. The radius of the path depends on:", 
                answer: "D.", 
                options: ["A. The charge of the particle", "B. The mass of the particle", "C. The velocity of the particle", "D. All of the above"] 
            },
            { 
                question: "Q5 (2020): The force between two charges is F. If the distance between the charges is halved, the force becomes:", 
                answer: "C.", 
                options: ["A. F/4", "B. 2F", "C. 4F", "D. F"] 
            },
            { 
                question: "Q6 (2021): A liquid is flowing through a pipe with a varying cross-sectional area. The velocity of the liquid is v at a section where the area is A. At another section where the area is A/2, the velocity is:", 
                answer: "A.", 
                options: ["A. 2v", "B. v", "C. v/2", "D. 4v"] 
            },
            { 
                question: "Q7 (2022): A body moves with velocity v along a straight line. The total distance covered in time t is 10 m. If the body moves along a curved path, the distance covered in the same time will be:", 
                answer: "B.", 
                options: ["A. 10 m", "B. More than 10 m", "C. Less than 10 m", "D. Depends on the path"] 
            },
            { 
                question: "Q8 (2023): A satellite orbits the Earth at a height where the gravitational force is half of what it is at the surface. The orbital speed of the satellite is:", 
                answer: "C.", 
                options: ["A. Half the speed at the surface", "B. Double the speed at the surface", "C. √2 times the speed at the surface", "D. Same as the speed at the surface"] 
            },
            { 
                question: "Q9 (2021): A 1 kg block is placed on a frictionless surface. A force of 10 N is applied to the block. The acceleration of the block is:", 
                answer: "C.", 
                options: ["A. 5 m/s²", "B. 10 m/s²", "C. 10 m/s²", "D. 20 m/s²"] 
            },
            { 
                question: "Q10 (2022): The angular momentum of a particle moving in a circular path is:", 
                answer: "A.", 
                options: ["A. mvr", "B. mv²r", "C. mvr²", "D. mr²"] 
            }
        ],
        8: [
            { 
                question: "Q1 (2020): A ball is thrown vertically upwards. What is the acceleration of the ball at the maximum height?", 
                answer: "A.", 
                options: ["A. g", "B. 0", "C. 2g", "D. g/2"] 
            },
            { 
                question: "Q2 (2021): A body of mass 5 kg is moving with velocity 10 m/s. The kinetic energy of the body is:", 
                answer: "C.", 
                options: ["A. 25 J", "B. 50 J", "C. 250 J", "D. 500 J"] 
            },
            { 
                question: "Q3 (2022): The resistivity of a material depends on:", 
                answer: "A.", 
                options: ["A. Temperature", "B. Length", "C. Cross-sectional area", "D. All of the above"] 
            },
            { 
                question: "Q4 (2023): The magnetic field at the center of a circular loop of radius r carrying a current I is:", 
                answer: "B.", 
                options: ["A. μ₀I/r", "B. μ₀I/2r", "C. μ₀I/r²", "D. μ₀I"] 
            },
            { 
                question: "Q5 (2021): A projectile is launched at an angle of 45° with the horizontal. The time of flight of the projectile is:", 
                answer: "D.", 
                options: ["A. 2u/g", "B. u/g", "C. u/2g", "D. 2u/g sin(45°)"] 
            },
            { 
                question: "Q6 (2022): The time period of a simple pendulum depends on:", 
                answer: "B.", 
                options: ["A. Amplitude", "B. Length", "C. Mass", "D. All of the above"] 
            },
            { 
                question: "Q7 (2023): A capacitor is charged by a battery. After disconnecting the battery, the capacitance is increased. The voltage across the plates will:", 
                answer: "A.", 
                options: ["A. Decrease", "B. Remain the same", "C. Increase", "D. Become zero"] 
            },
            { 
                question: "Q8 (2021): A wheel is rotating about an axis passing through its center. The linear velocity at a point on the rim of the wheel is:", 
                answer: "B.", 
                options: ["A. Zero", "B. ωr", "C. ωr²", "D. r²"] 
            },
            { 
                question: "Q9 (2022): The speed of sound in air is 340 m/s. What is the frequency of a wave with wavelength 0.68 m?", 
                answer: "C.", 
                options: ["A. 500 Hz", "B. 1000 Hz", "C. 500 Hz", "D. 680 Hz"] 
            },
            { 
                question: "Q10 (2023): If two resistors of resistances R₁ and R₂ are connected in parallel, the equivalent resistance is:", 
                answer: "B.", 
                options: ["A. R₁ + R₂", "B. (R₁R₂)/(R₁ + R₂)", "C. (R₁R₂)", "D. 1/(R₁ + R₂)"] 
            }
        ],
        9: [
            { 
                question: "Q1 (2020): In a uniform magnetic field, a moving charge experiences a force. The magnitude of the force depends on:", 
                answer: "D.", 
                options: ["A. The charge", "B. The velocity", "C. The magnetic field", "D. All of the above"] 
            },
            { 
                question: "Q2 (2021): A light wave passes through an air-glass interface. If the angle of incidence is i, the angle of refraction is r, the refractive index of glass is n. The relationship between the angles is:", 
                answer: "C.", 
                options: ["A. sin(i) = n sin(r)", "B. sin(i) = sin(r)/n", "C. sin(i)/sin(r) = n", "D. sin(i)/sin(r) = 1/n"] 
            },
            { 
                question: "Q3 (2022): The force between two charges is 100 N. If the distance between the charges is doubled, the force becomes:", 
                answer: "B.", 
                options: ["A. 25 N", "B. 25 N", "C. 50 N", "D. 100 N"] 
            },
            { 
                question: "Q4 (2023): The work done by the electric field in moving a charge q from a point at potential V₁ to a point at potential V₂ is:", 
                answer: "A.", 
                options: ["A. q(V₁ - V₂)", "B. q(V₂ - V₁)", "C. qV", "D. 0"] 
            },
            { 
                question: "Q5 (2021): A satellite orbits the Earth with a period T. The period of a satellite at twice the radius is:", 
                answer: "C.", 
                options: ["A. 2T", "B. √2T", "C. 4T", "D. T"] 
            },
            { 
                question: "Q6 (2022): A gas expands isothermally from volume V₁ to V₂. The work done by the gas in the process is:", 
                answer: "A.", 
                options: ["A. nRT ln(V₂/V₁)", "B. nRT ln(V₁/V₂)", "C. nRT V₂/V₁", "D. 0"] 
            },
            { 
                question: "Q7 (2023): A capacitor of capacitance C is charged to a voltage V. If the capacitance is doubled, the stored energy becomes:", 
                answer: "B.", 
                options: ["A. 4U", "B. 2U", "C. U", "D. U/2"] 
            },
            { 
                question: "Q8 (2021): A point mass is rotating with angular velocity ω. The torque on the point mass is:", 
                answer: "C.", 
                options: ["A. Zero", "B. ω²r", "C. Iω", "D. Iω²"] 
            },
            { 
                question: "Q9 (2022): The power of a wave is proportional to:", 
                answer: "D.", 
                options: ["A. Amplitude", "B. Frequency", "C. Wavelength", "D. Amplitude²"] 
            },
            { 
                question: "Q10 (2023): The electric field due to a point charge is inversely proportional to:", 
                answer: "C.", 
                options: ["A. r", "B. r²", "C. r²", "D. r³"] 
            }
        ],
        10: [
            { 
                question: "Q1 (2020): The energy required to move a charge q in an electric field between two points with potential difference V is:", 
                answer: "C.", 
                options: ["A. qV", "B. q²V", "C. qV", "D. qV²"] 
            },
            { 
                question: "Q2 (2021): The frequency of a vibrating string is independent of:", 
                answer: "D.", 
                options: ["A. Length of the string", "B. Tension in the string", "C. Mass per unit length", "D. All of the above"] 
            },
            { 
                question: "Q3 (2022): A body falls freely from a height h. The speed with which the body reaches the ground is:", 
                answer: "B.", 
                options: ["A. √2gh", "B. √gh", "C. g√h", "D. h²"] 
            },
            { 
                question: "Q4 (2023): The total resistance of two resistors connected in parallel is:", 
                answer: "A.", 
                options: ["A. 1/(1/R₁ + 1/R₂)", "B. R₁ + R₂", "C. R₁ - R₂", "D. R₁²R₂²"] 
            },
            { 
                question: "Q5 (2021): A lens forms a virtual image of an object. The object is:", 
                answer: "B.", 
                options: ["A. Beyond twice the focal length", "B. Between the focus and the lens", "C. At infinity", "D. At the focus"] 
            },
            { 
                question: "Q6 (2022): The electric field inside a conducting sphere is:", 
                answer: "A.", 
                options: ["A. Zero", "B. Constant", "C. Decreasing", "D. Increasing"] 
            },
            { 
                question: "Q7 (2023): The centripetal acceleration of a particle moving in a circle with radius r and speed v is:", 
                answer: "C.", 
                options: ["A. v²/r", "B. v/r", "C. v²/r", "D. r/v²"] 
            },
            { 
                question: "Q8 (2021): The period of a simple pendulum depends on:", 
                answer: "B.", 
                options: ["A. Amplitude", "B. Length", "C. Mass", "D. All of the above"] 
            },
            { 
                question: "Q9 (2022): The current in a conductor is inversely proportional to the:", 
                answer: "D.", 
                options: ["A. Voltage", "B. Cross-sectional area", "C. Temperature", "D. Resistance"] 
            },
            { 
                question: "Q10 (2023): The resistance of a wire depends on:", 
                answer: "A.", 
                options: ["A. Length and temperature", "B. Cross-sectional area", "C. Material", "D. All of the above"] 
            }
        ],                                                                        
    },
    chemistry: {
        1: [
            { 
                question: "Q1 (2020): The molar mass of sodium chloride (NaCl) is:", 
                answer: "A.", 
                options: ["A. 58.5 g/mol", "B. 35.5 g/mol", "C. 22.99 g/mol", "D. 74.5 g/mol"] 
            },
            { 
                question: "Q2 (2021): Which of the following gases is most soluble in water?", 
                answer: "C.", 
                options: ["A. Nitrogen", "B. Oxygen", "C. Carbon dioxide", "D. Hydrogen"] 
            },
            { 
                question: "Q3 (2022): The oxidation state of chlorine in NaClO3 is:", 
                answer: "B.", 
                options: ["A. +1", "B. +5", "C. +3", "D. -1"] 
            },
            { 
                question: "Q4 (2023): Which element is the most electronegative?", 
                answer: "A.", 
                options: ["A. Fluorine", "B. Oxygen", "C. Chlorine", "D. Nitrogen"] 
            },
            { 
                question: "Q5 (2021): What is the formula of potassium dichromate?", 
                answer: "C.", 
                options: ["A. K2Cr2O7", "B. KCr2O7", "C. K2Cr2O7", "D. KCrO4"] 
            },
            { 
                question: "Q6 (2022): Which compound exhibits hydrogen bonding?", 
                answer: "D.", 
                options: ["A. CH4", "B. CO2", "C. NaCl", "D. H2O"] 
            },
            { 
                question: "Q7 (2023): What is the pH of a neutral solution at 25°C?", 
                answer: "A.", 
                options: ["A. 7", "B. 14", "C. 0", "D. 10"] 
            },
            { 
                question: "Q8 (2021): Which of the following is a Lewis acid?", 
                answer: "B.", 
                options: ["A. H2O", "B. BF3", "C. NH3", "D. CH4"] 
            },
            { 
                question: "Q9 (2022): What is the molarity of a solution prepared by dissolving 2 moles of NaOH in 2 liters of water?", 
                answer: "C.", 
                options: ["A. 1 M", "B. 0.5 M", "C. 1 M", "D. 2 M"] 
            },
            { 
                question: "Q10 (2023): What is the molar volume of an ideal gas at STP?", 
                answer: "A.", 
                options: ["A. 22.4 L/mol", "B. 24.5 L/mol", "C. 1.0 L/mol", "D. 0.0821 L/mol"] 
            }
        ],
        2: [
            { 
                question: "Q1 (2021): Which of the following is an example of an exothermic reaction?", 
                answer: "C.", 
                options: ["A. Melting of ice", "B. Evaporation of water", "C. Combustion of methane", "D. Dissolution of NaOH in water"] 
            },
            { 
                question: "Q2 (2022): The enthalpy change for the formation of 1 mole of a compound from its elements in their standard states is known as:", 
                answer: "A.", 
                options: ["A. Standard enthalpy of formation", "B. Standard enthalpy of combustion", "C. Standard enthalpy of reaction", "D. Bond enthalpy"] 
            },
            { 
                question: "Q3 (2023): The reaction between zinc and sulfuric acid produces:", 
                answer: "B.", 
                options: ["A. Zinc hydroxide", "B. Zinc sulfate", "C. Hydrogen gas", "D. Oxygen gas"] 
            },
            { 
                question: "Q4 (2021): Which of the following is the strongest acid?", 
                answer: "C.", 
                options: ["A. HCl", "B. H2SO4", "C. HF", "D. HNO3"] 
            },
            { 
                question: "Q5 (2022): Which gas is evolved during the reaction of a metal with an acid?", 
                answer: "D.", 
                options: ["A. Oxygen", "B. Nitrogen", "C. Carbon dioxide", "D. Hydrogen"] 
            },
            { 
                question: "Q6 (2023): The compound CH3OH is known as:", 
                answer: "B.", 
                options: ["A. Methane", "B. Methanol", "C. Ethanol", "D. Acetone"] 
            },
            { 
                question: "Q7 (2021): The pH of a solution increases when the concentration of hydrogen ions:", 
                answer: "A.", 
                options: ["A. Decreases", "B. Increases", "C. Remains constant", "D. Is neutralized"] 
            },
            { 
                question: "Q8 (2022): Which of the following is the correct formula for calcium carbonate?", 
                answer: "D.", 
                options: ["A. CaO3", "B. CaO", "C. Ca(OH)2", "D. CaCO3"] 
            },
            { 
                question: "Q9 (2023): Which of the following elements is most likely to form an ionic bond?", 
                answer: "B.", 
                options: ["A. Carbon", "B. Sodium", "C. Oxygen", "D. Hydrogen"] 
            },
            { 
                question: "Q10 (2021): The process of converting a solid directly into a gas is called:", 
                answer: "C.", 
                options: ["A. Condensation", "B. Freezing", "C. Sublimation", "D. Melting"] 
            }
        ], 
        3: [
            { 
                question: "Q1 (2020): What is the molecular geometry of methane (CH4)?", 
                answer: "A.", 
                options: ["A. Tetrahedral", "B. Trigonal Planar", "C. Linear", "D. Octahedral"] 
            },
            { 
                question: "Q2 (2021): The rate of a chemical reaction is affected by the concentration of the reactants, temperature, and:", 
                answer: "C.", 
                options: ["A. Pressure", "B. Catalyst", "C. Activation energy", "D. All of the above"] 
            },
            { 
                question: "Q3 (2022): The chemical formula of sodium bicarbonate is:", 
                answer: "B.", 
                options: ["A. Na2CO3", "B. NaHCO3", "C. Na2SO4", "D. NaOH"] 
            },
            { 
                question: "Q4 (2023): Which of the following is a characteristic of ionic compounds?", 
                answer: "D.", 
                options: ["A. Low melting points", "B. Poor electrical conductivity", "C. Soluble in organic solvents", "D. High melting points and good electrical conductivity in molten state"] 
            },
            { 
                question: "Q5 (2021): Which of the following elements has the highest ionization energy?", 
                answer: "A.", 
                options: ["A. Helium", "B. Oxygen", "C. Nitrogen", "D. Neon"] 
            },
            { 
                question: "Q6 (2022): Which is the most abundant element in the Earth’s crust?", 
                answer: "C.", 
                options: ["A. Oxygen", "B. Silicon", "C. Aluminium", "D. Iron"] 
            },
            { 
                question: "Q7 (2023): What is the atomic number of carbon?", 
                answer: "B.", 
                options: ["A. 6", "B. 6", "C. 12", "D. 8"] 
            },
            { 
                question: "Q8 (2021): The process of converting a liquid into a gas at a temperature below its boiling point is called:", 
                answer: "A.", 
                options: ["A. Evaporation", "B. Boiling", "C. Sublimation", "D. Condensation"] 
            },
            { 
                question: "Q9 (2022): Which of the following is an example of a redox reaction?", 
                answer: "C.", 
                options: ["A. Combustion of methane", "B. Dissolution of salt in water", "C. Oxidation of iron", "D. Dissolution of sugar in water"] 
            },
            { 
                question: "Q10 (2023): Which of the following is the primary product when an alkene reacts with hydrogen?", 
                answer: "D.", 
                options: ["A. Alcohol", "B. Ether", "C. Alkane", "D. Alkane"] 
            }
        ],
        4: [
            { 
                question: "Q1 (2020): Which of the following compounds is most acidic?", 
                answer: "A.", 
                options: ["A. HCl", "B. H2SO4", "C. HNO3", "D. HF"] 
            },
            { 
                question: "Q2 (2021): The chemical formula of sulfuric acid is:", 
                answer: "C.", 
                options: ["A. H2SO3", "B. H2SO4", "C. H2SO4", "D. H2S"] 
            },
            { 
                question: "Q3 (2022): Which of the following is an example of a covalent compound?", 
                answer: "B.", 
                options: ["A. NaCl", "B. CO2", "C. K2SO4", "D. NaOH"] 
            },
            { 
                question: "Q4 (2023): What is the molar mass of calcium carbonate (CaCO3)?", 
                answer: "B.", 
                options: ["A. 40.08 g/mol", "B. 100.09 g/mol", "C. 138.23 g/mol", "D. 94.05 g/mol"] 
            },
            { 
                question: "Q5 (2021): Which of the following is the least reactive halogen?", 
                answer: "D.", 
                options: ["A. Fluorine", "B. Chlorine", "C. Bromine", "D. Iodine"] 
            },
            { 
                question: "Q6 (2022): What is the standard electrode potential of a standard hydrogen electrode?", 
                answer: "C.", 
                options: ["A. 0 V", "B. +1 V", "C. 0 V", "D. -1 V"] 
            },
            { 
                question: "Q7 (2023): The type of bond present in water (H2O) is:", 
                answer: "A.", 
                options: ["A. Polar covalent bond", "B. Non-polar covalent bond", "C. Ionic bond", "D. Coordinate covalent bond"] 
            },
            { 
                question: "Q8 (2021): Which of the following reactions is an example of a combination reaction?", 
                answer: "B.", 
                options: ["A. NaOH + HCl → NaCl + H2O", "B. 2H2 + O2 → 2H2O", "C. CaO + H2O → Ca(OH)2", "D. Zn + CuSO4 → ZnSO4 + Cu"] 
            },
            { 
                question: "Q9 (2022): Which of the following is the pH of a neutral solution?", 
                answer: "C.", 
                options: ["A. 0", "B. 14", "C. 7", "D. 10"] 
            },
            { 
                question: "Q10 (2023): Which gas is produced during the reaction of an acid with a metal?", 
                answer: "D.", 
                options: ["A. Oxygen", "B. Nitrogen", "C. Carbon dioxide", "D. Hydrogen"] 
            }
        ],
        5: [
            { 
                question: "Q1 (2020): What is the oxidation state of chromium in Cr2O7²⁻?", 
                answer: "C.", 
                options: ["A. +2", "B. +3", "C. +6", "D. +7"] 
            },
            { 
                question: "Q2 (2021): Which of the following is a Lewis acid?", 
                answer: "D.", 
                options: ["A. NH3", "B. H2O", "C. Cl-", "D. AlCl3"] 
            },
            { 
                question: "Q3 (2022): The chemical formula of ammonium nitrate is:", 
                answer: "B.", 
                options: ["A. NH4NO3", "B. NH4NO3", "C. N2H4O3", "D. NH3NO3"] 
            },
            { 
                question: "Q4 (2023): Which of the following compounds is used in the preparation of hydrogen gas in laboratory?", 
                answer: "A.", 
                options: ["A. Zn + HCl", "B. NaOH", "C. H2SO4", "D. H2O2"] 
            },
            { 
                question: "Q5 (2021): The pH of a neutral solution at 25°C is:", 
                answer: "C.", 
                options: ["A. 4", "B. 6", "C. 7", "D. 10"] 
            },
            { 
                question: "Q6 (2022): Which of the following is the least soluble in water?", 
                answer: "D.", 
                options: ["A. NaCl", "B. KNO3", "C. NaOH", "D. AgCl"] 
            },
            { 
                question: "Q7 (2023): What is the molecular formula of ethylene glycol?", 
                answer: "A.", 
                options: ["A. C2H6O2", "B. C2H4O2", "C. C3H8O3", "D. C4H6O2"] 
            },
            { 
                question: "Q8 (2021): Which of the following compounds has the highest boiling point?", 
                answer: "B.", 
                options: ["A. CH4", "B. H2O", "C. NH3", "D. CO2"] 
            },
            { 
                question: "Q9 (2022): The electron configuration of sodium ion (Na⁺) is:", 
                answer: "C.", 
                options: ["A. 1s² 2s² 2p⁶", "B. 1s² 2s² 2p⁶ 3s¹", "C. 1s² 2s² 2p⁶ 3s²", "D. 1s² 2s² 2p⁶ 3p⁶"] 
            },
            { 
                question: "Q10 (2023): The solution of an acidic salt, like NH4Cl, is:", 
                answer: "A.", 
                options: ["A. Acidic", "B. Basic", "C. Neutral", "D. Amphoteric"] 
            }
        ],
        6: [
            { 
                question: "Q1 (2020): Which of the following is not a strong acid?", 
                answer: "D.", 
                options: ["A. HCl", "B. H2SO4", "C. HNO3", "D. H2CO3"] 
            },
            { 
                question: "Q2 (2021): What is the molecular geometry of the chlorate ion (ClO3⁻)?", 
                answer: "B.", 
                options: ["A. Linear", "B. Trigonal Pyramidal", "C. Trigonal Planar", "D. Tetrahedral"] 
            },
            { 
                question: "Q3 (2022): The number of moles of H2O molecules in 18 g of water is:", 
                answer: "A.", 
                options: ["A. 1 mole", "B. 2 moles", "C. 0.5 mole", "D. 0.1 mole"] 
            },
            { 
                question: "Q4 (2023): Which of the following is not a typical property of an alkali metal?", 
                answer: "C.", 
                options: ["A. Good conductor of electricity", "B. Soft and can be cut with a knife", "C. Forms acidic oxides", "D. Reacts with water to release hydrogen"] 
            },
            { 
                question: "Q5 (2021): Which of the following reactions is an example of a displacement reaction?", 
                answer: "B.", 
                options: ["A. NaOH + HCl → NaCl + H2O", "B. Zn + CuSO4 → ZnSO4 + Cu", "C. 2H2 + O2 → 2H2O", "D. CaCO3 → CaO + CO2"] 
            },
            { 
                question: "Q6 (2022): Which of the following ions will have the highest charge density?", 
                answer: "D.", 
                options: ["A. Na+", "B. Mg²⁺", "C. Al³⁺", "D. Fe³⁺"] 
            },
            { 
                question: "Q7 (2023): The molar volume of an ideal gas at STP is:", 
                answer: "C.", 
                options: ["A. 22.4 L", "B. 10.0 L", "C. 22.4 L/mol", "D. 30.0 L/mol"] 
            },
            { 
                question: "Q8 (2021): Which of the following is a property of a non-metal?", 
                answer: "A.", 
                options: ["A. Poor conductor of heat", "B. Malleable", "C. High melting point", "D. Good conductor of electricity"] 
            },
            { 
                question: "Q9 (2022): What is the oxidation state of sulfur in H2SO4?", 
                answer: "C.", 
                options: ["A. +2", "B. +4", "C. +6", "D. -2"] 
            },
            { 
                question: "Q10 (2023): Which of the following gases is produced when an acid reacts with a metal?", 
                answer: "D.", 
                options: ["A. Oxygen", "B. Nitrogen", "C. Hydrogen", "D. Carbon dioxide"] 
            }
        ], 
        7: [
            { 
                question: "Q1 (2020): The chemical formula of potassium dichromate is:", 
                answer: "B.", 
                options: ["A. K2CrO3", "B. K2Cr2O7", "C. K2CrO4", "D. K2Cr2O3"] 
            },
            { 
                question: "Q2 (2021): Which of the following is a property of an amphoteric oxide?", 
                answer: "D.", 
                options: ["A. Reacts only with acids", "B. Reacts only with bases", "C. Neutral", "D. Reacts with both acids and bases"] 
            },
            { 
                question: "Q3 (2022): What is the molecular weight of nitrogen (N2)?", 
                answer: "B.", 
                options: ["A. 14 g/mol", "B. 28 g/mol", "C. 42 g/mol", "D. 56 g/mol"] 
            },
            { 
                question: "Q4 (2023): Which of the following is used as a catalyst in the Haber process?", 
                answer: "A.", 
                options: ["A. Iron", "B. Nickel", "C. Platinum", "D. Copper"] 
            },
            { 
                question: "Q5 (2021): Which of the following is not a characteristic of a strong acid?", 
                answer: "C.", 
                options: ["A. Completely dissociates in water", "B. Produces H⁺ ions in solution", "C. Has a high pH", "D. Corrosive"] 
            },
            { 
                question: "Q6 (2022): Which of the following is true about noble gases?", 
                answer: "B.", 
                options: ["A. They readily form compounds", "B. They are chemically inert", "C. They are highly reactive", "D. They have high electronegativity"] 
            },
            { 
                question: "Q7 (2023): The formula of acetylene is:", 
                answer: "D.", 
                options: ["A. C2H6", "B. C2H4", "C. C2H2O", "D. C2H2"] 
            },
            { 
                question: "Q8 (2021): Which of the following compounds is used in the preparation of industrial detergents?", 
                answer: "A.", 
                options: ["A. Sodium lauryl sulfate", "B. Sodium bicarbonate", "C. Sodium chloride", "D. Sodium hydroxide"] 
            },
            { 
                question: "Q9 (2022): The empirical formula of glucose is:", 
                answer: "B.", 
                options: ["A. C6H12O6", "B. CH2O", "C. C2H4O2", "D. C3H6O3"] 
            },
            { 
                question: "Q10 (2023): The atomic number of oxygen is:", 
                answer: "A.", 
                options: ["A. 8", "B. 16", "C. 10", "D. 12"] 
            }
        ],
        8: [
            { 
                question: "Q1 (2020): Which of the following is an example of a redox reaction?", 
                answer: "A.", 
                options: ["A. Zn + CuSO4 → ZnSO4 + Cu", "B. NaOH + HCl → NaCl + H2O", "C. CaCO3 → CaO + CO2", "D. H2 + O2 → H2O"] 
            },
            { 
                question: "Q2 (2021): What is the strongest acid among the following?", 
                answer: "B.", 
                options: ["A. HCl", "B. H2SO4", "C. HNO3", "D. H2CO3"] 
            },
            { 
                question: "Q3 (2022): Which of the following is a characteristic of a base?", 
                answer: "C.", 
                options: ["A. Sour taste", "B. Turns blue litmus red", "C. Bitter taste", "D. Reacts with metals to form hydrogen"] 
            },
            { 
                question: "Q4 (2023): Which of the following compounds is an example of an allotrope of carbon?", 
                answer: "A.", 
                options: ["A. Graphite", "B. Sodium chloride", "C. Methane", "D. Nitrogen"] 
            },
            { 
                question: "Q5 (2021): The process of extracting iron from its ore is known as:", 
                answer: "D.", 
                options: ["A. Electrolysis", "B. Distillation", "C. Precipitation", "D. Smelting"] 
            },
            { 
                question: "Q6 (2022): The molar mass of sulfuric acid (H2SO4) is:", 
                answer: "C.", 
                options: ["A. 48 g/mol", "B. 58 g/mol", "C. 98 g/mol", "D. 88 g/mol"] 
            },
            { 
                question: "Q7 (2023): Which of the following is a characteristic of a liquid?", 
                answer: "A.", 
                options: ["A. Fixed volume", "B. Compressible", "C. Does not flow", "D. No definite shape"] 
            },
            { 
                question: "Q8 (2021): The element that has the highest electronegativity is:", 
                answer: "B.", 
                options: ["A. Sodium", "B. Fluorine", "C. Chlorine", "D. Oxygen"] 
            },
            { 
                question: "Q9 (2022): What is the chemical formula of methanol?", 
                answer: "C.", 
                options: ["A. CH3OH", "B. CH4O", "C. CH3OH", "D. CH4"] 
            },
            { 
                question: "Q10 (2023): Which of the following is not a property of an acid?", 
                answer: "D.", 
                options: ["A. Sour taste", "B. Turns blue litmus red", "C. Reacts with bases", "D. Forms precipitates with metals"] 
            }
        ],
        9: [
            { 
                question: "Q1 (2020): What is the molar volume of an ideal gas at STP?", 
                answer: "A.", 
                options: ["A. 22.4 L", "B. 11.2 L", "C. 24.5 L", "D. 23.5 L"] 
            },
            { 
                question: "Q2 (2021): Which of the following elements has the highest ionization energy?", 
                answer: "C.", 
                options: ["A. Sodium", "B. Potassium", "C. Neon", "D. Magnesium"] 
            },
            { 
                question: "Q3 (2022): Which of the following acids is not a strong acid?", 
                answer: "B.", 
                options: ["A. HCl", "B. H2CO3", "C. HNO3", "D. H2SO4"] 
            },
            { 
                question: "Q4 (2023): Which of the following gases is produced when an acid reacts with a metal?", 
                answer: "A.", 
                options: ["A. Hydrogen gas", "B. Oxygen gas", "C. Nitrogen gas", "D. Carbon dioxide"] 
            },
            { 
                question: "Q5 (2021): Which compound is used to prevent the corrosion of iron?", 
                answer: "C.", 
                options: ["A. Calcium carbonate", "B. Sodium chloride", "C. Zinc", "D. Magnesium"] 
            },
            { 
                question: "Q6 (2022): What is the pH of a neutral solution at 25°C?", 
                answer: "B.", 
                options: ["A. 7.5", "B. 7", "C. 6", "D. 8"] 
            },
            { 
                question: "Q7 (2023): What is the oxidation state of sulfur in H2SO4?", 
                answer: "D.", 
                options: ["A. +2", "B. +4", "C. +6", "D. +6"] 
            },
            { 
                question: "Q8 (2021): Which of the following is the best method for separating a mixture of sand and salt?", 
                answer: "A.", 
                options: ["A. Filtration", "B. Distillation", "C. Sublimation", "D. Chromatography"] 
            },
            { 
                question: "Q9 (2022): The rate of a chemical reaction typically increases with temperature due to:", 
                answer: "C.", 
                options: ["A. Decrease in activation energy", "B. Increase in concentration", "C. Increase in kinetic energy of reactants", "D. Change in pressure"] 
            },
            { 
                question: "Q10 (2023): Which of the following gases is most likely to be a greenhouse gas?", 
                answer: "B.", 
                options: ["A. Nitrogen", "B. Carbon dioxide", "C. Oxygen", "D. Argon"] 
            }
        ],
        10: [
            { 
                question: "Q1 (2020): What is the hybridization of the central atom in CO2?", 
                answer: "A.", 
                options: ["A. sp", "B. sp²", "C. sp³", "D. sp³d"] 
            },
            { 
                question: "Q2 (2021): Which of the following is an example of a Lewis acid?", 
                answer: "D.", 
                options: ["A. NH3", "B. H2O", "C. CO2", "D. BF3"] 
            },
            { 
                question: "Q3 (2022): The boiling point of water is higher than that of hydrogen sulfide because of:", 
                answer: "C.", 
                options: ["A. Hydrogen bonding", "B. Van der Waals forces", "C. Dipole-dipole interaction", "D. Ionic bonds"] 
            },
            { 
                question: "Q4 (2023): What is the electron configuration of a sodium ion (Na⁺)?", 
                answer: "B.", 
                options: ["A. 1s²2s²2p⁶3s²", "B. 1s²2s²2p⁶", "C. 1s²2s²2p⁶3s¹", "D. 1s²2s²2p⁶3p⁶"] 
            },
            { 
                question: "Q5 (2021): Which of the following is an example of an endothermic reaction?", 
                answer: "C.", 
                options: ["A. Combustion of methane", "B. Freezing of water", "C. Dissolving of ammonium nitrate in water", "D. Condensation of steam"] 
            },
            { 
                question: "Q6 (2022): What is the general formula of an alkane?", 
                answer: "A.", 
                options: ["A. CnH2n+2", "B. CnH2n", "C. CnH2n-2", "D. CnH2n+1"] 
            },
            { 
                question: "Q7 (2023): Which of the following is the correct IUPAC name of CH3CH2OH?", 
                answer: "B.", 
                options: ["A. Ethanol", "B. Ethyl alcohol", "C. Ethene", "D. Methanol"] 
            },
            { 
                question: "Q8 (2021): Which of the following metals does not react with water?", 
                answer: "C.", 
                options: ["A. Sodium", "B. Calcium", "C. Gold", "D. Potassium"] 
            },
            { 
                question: "Q9 (2022): The chemical reaction between an acid and a base produces:", 
                answer: "A.", 
                options: ["A. Salt and water", "B. Salt and hydrogen", "C. Water and carbon dioxide", "D. Hydrogen and oxygen"] 
            },
            { 
                question: "Q10 (2023): What is the oxidation state of chlorine in NaClO3?", 
                answer: "D.", 
                options: ["A. +1", "B. +2", "C. +3", "D. +5"] 
            }
        ],        
    },
    math: {
        1: [
            { 
                question: "Q1 (2020): If the equation x² + y² = 1 represents a circle, then the parametric equations of the circle are:", 
                answer: "B.", 
                options: ["A. x = cos t, y = sin t", "B. x = cos t, y = -sin t", "C. x = tan t, y = sec t", "D. x = sec t, y = tan t"] 
            },
            { 
                question: "Q2 (2021): If α, β are the roots of the equation x² - 3x + 2 = 0, then the value of (α + β)² is:", 
                answer: "C.", 
                options: ["A. 1", "B. 2", "C. 9", "D. 6"] 
            },
            { 
                question: "Q3 (2022): The equation of the tangent to the curve y = x³ + 3x² - 4x + 2 at x = 1 is:", 
                answer: "D.", 
                options: ["A. y = x + 2", "B. y = 3x + 1", "C. y = x - 2", "D. y = 6x - 3"] 
            },
            { 
                question: "Q4 (2023): The roots of the quadratic equation x² + 2x + 3 = 0 are:", 
                answer: "A.", 
                options: ["A. Complex roots", "B. Real roots", "C. Equal real roots", "D. No roots"] 
            },
            { 
                question: "Q5 (2021): The value of the integral ∫ (1/(x² + 4)) dx is:", 
                answer: "B.", 
                options: ["A. (1/2)ln(x² + 4) + C", "B. (1/2)tan⁻¹(x/2) + C", "C. (1/4)tan⁻¹(x/4) + C", "D. (1/4)ln(x² + 4) + C"] 
            },
            { 
                question: "Q6 (2022): If the sum of the first n terms of an arithmetic progression is given by Sₙ = n(3n - 2), then the common difference is:", 
                answer: "C.", 
                options: ["A. 3", "B. 6", "C. 4", "D. 5"] 
            },
            { 
                question: "Q7 (2023): The value of the integral ∫ (sin x)/(cos² x) dx is:", 
                answer: "D.", 
                options: ["A. ln(sin x)", "B. ln(cos x)", "C. -ln(cos x)", "D. tan⁻¹(sin x)"] 
            },
            { 
                question: "Q8 (2021): If the equation of a circle is x² + y² - 4x - 6y + 9 = 0, the coordinates of its center are:", 
                answer: "B.", 
                options: ["A. (2, 3)", "B. (2, 3)", "C. (-2, -3)", "D. (-2, 3)"] 
            },
            { 
                question: "Q9 (2022): The derivative of (x³ + 2x² - 5x + 7) with respect to x is:", 
                answer: "A.", 
                options: ["A. 3x² + 4x - 5", "B. 3x² + 2x + 5", "C. 2x² + 4x + 3", "D. 4x² - 5"] 
            },
            { 
                question: "Q10 (2023): The number of ways in which 6 boys and 5 girls can be arranged in a row such that the girls are always together is:", 
                answer: "C.", 
                options: ["A. 11!", "B. 5!", "C. 6! × 5!", "D. 6! × 4!"] 
            }
        ],
        2: [
            { 
                question: "Q1 (2020): The value of the limit lim(x→0) (sin 2x)/(x) is:", 
                answer: "D.", 
                options: ["A. 1", "B. 2", "C. 0", "D. 2"] 
            },
            { 
                question: "Q2 (2021): The area of the region enclosed by the curve y = x² - 4x + 3 and the x-axis is:", 
                answer: "A.", 
                options: ["A. 3", "B. 6", "C. 4", "D. 2"] 
            },
            { 
                question: "Q3 (2022): The differential equation of a straight line with slope m passing through the origin is:", 
                answer: "B.", 
                options: ["A. dy/dx = m", "B. dy/dx = -m", "C. y = mx", "D. y = -mx"] 
            },
            { 
                question: "Q4 (2023): The value of the integral ∫ (e^x)/(x) dx is:", 
                answer: "D.", 
                options: ["A. e^x + C", "B. ln(x) + C", "C. x² + C", "D. No elementary function"] 
            },
            { 
                question: "Q5 (2021): The equation of the line passing through the point (2, 3) and having slope 4 is:", 
                answer: "A.", 
                options: ["A. y - 3 = 4(x - 2)", "B. y + 3 = 4(x + 2)", "C. y = 4x + 2", "D. y = 2x + 3"] 
            },
            { 
                question: "Q6 (2022): The integral of (1/√(x² + 1)) dx is:", 
                answer: "C.", 
                options: ["A. ln(x + √(x² + 1)) + C", "B. ln(x - √(x² + 1)) + C", "C. sinh⁻¹(x) + C", "D. cosh⁻¹(x) + C"] 
            },
            { 
                question: "Q7 (2023): The number of distinct roots of the equation x⁴ - 5x² + 4 = 0 is:", 
                answer: "B.", 
                options: ["A. 2", "B. 4", "C. 3", "D. 1"] 
            },
            { 
                question: "Q8 (2021): The value of lim(x→∞) (1 + 1/x)ⁿ is:", 
                answer: "A.", 
                options: ["A. 1", "B. e", "C. 0", "D. ∞"] 
            },
            { 
                question: "Q9 (2022): The sum of the infinite series 1 + 2 + 3 + 4 + ... is:", 
                answer: "C.", 
                options: ["A. Convergent", "B. Divergent", "C. Infinite", "D. Undefined"] 
            },
            { 
                question: "Q10 (2023): The number of ways to arrange 5 boys and 4 girls in a row such that no two girls sit together is:", 
                answer: "A.", 
                options: ["A. 5! × 4!", "B. 5! × 3!", "C. 5! × 2!", "D. 6! × 4!"] 
            }
        ],   
        3: [
            { 
                question: "Q1 (2020): The value of the limit lim(x→∞) (1 + 1/x)^(x²) is:", 
                answer: "C.", 
                options: ["A. e", "B. 2", "C. ∞", "D. 1"] 
            },
            { 
                question: "Q2 (2021): The area of the region bounded by the curve y = x³ - 3x² + 2x and the x-axis is:", 
                answer: "B.", 
                options: ["A. 3", "B. 4", "C. 5", "D. 6"] 
            },
            { 
                question: "Q3 (2022): If the sum of the infinite series 1 + 1/2 + 1/3 + 1/4 + ... is S, then the value of S is:", 
                answer: "D.", 
                options: ["A. 1", "B. 2", "C. 0", "D. Divergent"] 
            },
            { 
                question: "Q4 (2023): The equation of the tangent to the curve y = ln(x² + 1) at x = 1 is:", 
                answer: "A.", 
                options: ["A. y = 2x", "B. y = x + 1", "C. y = x² + 2", "D. y = 3x"] 
            },
            { 
                question: "Q5 (2021): The value of the integral ∫ (x³ + 2x² + x) dx is:", 
                answer: "C.", 
                options: ["A. (1/4)x⁴ + (2/3)x³ + (1/2)x² + C", "B. (1/3)x³ + (2/3)x² + x + C", "C. (1/4)x⁴ + (2/3)x³ + (1/2)x² + C", "D. (1/2)x⁴ + (1/3)x³ + x² + C"] 
            },
            { 
                question: "Q6 (2022): If the determinant |A| = 0, then matrix A is:", 
                answer: "D.", 
                options: ["A. Singular", "B. Non-singular", "C. Diagonal", "D. Invertible"] 
            },
            { 
                question: "Q7 (2023): The solution to the differential equation dy/dx = 2x is:", 
                answer: "B.", 
                options: ["A. x² + C", "B. x²", "C. 2x + C", "D. x + C"] 
            },
            { 
                question: "Q8 (2021): The general solution of sin²x - cos²x = 0 is:", 
                answer: "A.", 
                options: ["A. x = nπ ± π/4", "B. x = nπ", "C. x = nπ ± π/2", "D. x = nπ + π/2"] 
            },
            { 
                question: "Q9 (2022): The value of the integral ∫ (sin²x)/(cosx) dx is:", 
                answer: "C.", 
                options: ["A. cos⁻¹x", "B. ln(cos x)", "C. (1/2)sin(2x)", "D. -sin(2x)"] 
            },
            { 
                question: "Q10 (2023): The number of ways to arrange 8 boys and 6 girls in a row such that no two girls sit together is:", 
                answer: "D.", 
                options: ["A. 8! × 6!", "B. 8! × 5!", "C. 8! × 4!", "D. 8! × 7!"] 
            }
        ],
        4: [
            { 
                question: "Q1 (2020): The number of solutions to the equation |x - 2| + |x + 3| = 7 is:", 
                answer: "A.", 
                options: ["A. 2", "B. 1", "C. 3", "D. 4"] 
            },
            { 
                question: "Q2 (2021): If the value of the integral ∫ (x² - 2x + 1)/(x - 1) dx is 2, then the value of the constant C is:", 
                answer: "C.", 
                options: ["A. 1", "B. -1", "C. 0", "D. 3"] 
            },
            { 
                question: "Q3 (2022): The number of distinct real roots of the equation x⁴ + 2x³ + x² - 3x + 2 = 0 is:", 
                answer: "D.", 
                options: ["A. 1", "B. 2", "C. 3", "D. 4"] 
            },
            { 
                question: "Q4 (2023): The value of the sum 1 + 2 + 3 + ... + 100 is:", 
                answer: "A.", 
                options: ["A. 5050", "B. 5000", "C. 5100", "D. 5200"] 
            },
            { 
                question: "Q5 (2021): The value of the limit lim(x→∞) (2x³ - x² + 5)/(x³ + 3) is:", 
                answer: "B.", 
                options: ["A. 2", "B. 1", "C. 0", "D. ∞"] 
            },
            { 
                question: "Q6 (2022): The value of the integral ∫ e^(2x) dx is:", 
                answer: "A.", 
                options: ["A. (1/2)e^(2x) + C", "B. (1/2)e^(2x)", "C. e^(2x) + C", "D. e^(2x)"] 
            },
            { 
                question: "Q7 (2023): The value of lim(x→0) (x² + 3x + 2)/(x² + 2x + 1) is:", 
                answer: "C.", 
                options: ["A. 1", "B. 2", "C. 0", "D. ∞"] 
            },
            { 
                question: "Q8 (2021): The derivative of the function f(x) = ln(x² + 2x + 1) is:", 
                answer: "A.", 
                options: ["A. 2x/(x² + 2x + 1)", "B. 2/(x² + 2x + 1)", "C. 1/(x² + 2x + 1)", "D. 2x"] 
            },
            { 
                question: "Q9 (2022): The value of the determinant |A| for a 2x2 matrix A = [[a, b], [c, d]] is:", 
                answer: "B.", 
                options: ["A. a + d", "B. ad - bc", "C. ac - bd", "D. ab + cd"] 
            },
            { 
                question: "Q10 (2023): The number of solutions to the equation x² + y² = 9, where x and y are integers, is:", 
                answer: "A.", 
                options: ["A. 4", "B. 3", "C. 2", "D. 1"] 
            }
        ],   
        5: [
            { 
                question: "Q1 (2020): The number of solutions to the equation |x - 1| + |x + 2| = 5 is:", 
                answer: "C.", 
                options: ["A. 1", "B. 2", "C. 3", "D. 4"] 
            },
            { 
                question: "Q2 (2021): The value of the sum of the infinite series 1 + 1/2 + 1/4 + 1/8 + ... is:", 
                answer: "A.", 
                options: ["A. 2", "B. 1", "C. 3", "D. 4"] 
            },
            { 
                question: "Q3 (2022): The solution to the differential equation dy/dx = 3x² is:", 
                answer: "B.", 
                options: ["A. x³ + C", "B. x³ + 1", "C. x² + C", "D. 3x + C"] 
            },
            { 
                question: "Q4 (2023): The value of the limit lim(x→∞) (e^(3x) - e^(2x))/(e^(2x)) is:", 
                answer: "D.", 
                options: ["A. 0", "B. 1", "C. e", "D. ∞"] 
            },
            { 
                question: "Q5 (2021): The general solution of the equation sin(x) = cos(x) is:", 
                answer: "A.", 
                options: ["A. x = nπ + π/4", "B. x = nπ", "C. x = 2nπ + π/4", "D. x = nπ + π/2"] 
            },
            { 
                question: "Q6 (2022): The value of the integral ∫ (1/x) dx is:", 
                answer: "C.", 
                options: ["A. ln|x| + C", "B. x + C", "C. ln(x) + C", "D. x² + C"] 
            },
            { 
                question: "Q7 (2023): The derivative of the function f(x) = ln(x² + 3x + 2) is:", 
                answer: "A.", 
                options: ["A. (2x + 3)/(x² + 3x + 2)", "B. (2x + 3)/2", "C. (2x + 1)/(x² + 3x + 2)", "D. (x + 1)/(x² + 3x + 2)"] 
            },
            { 
                question: "Q8 (2021): The value of the determinant |A| for a matrix A = [[1, 2], [3, 4]] is:", 
                answer: "B.", 
                options: ["A. 4", "B. -2", "C. 6", "D. 5"] 
            },
            { 
                question: "Q9 (2022): The solution to the equation x³ - 6x² + 11x - 6 = 0 is:", 
                answer: "C.", 
                options: ["A. 1, 2, 3", "B. 1, -2, 3", "C. 1, 2, 3", "D. 2, 3, -4"] 
            },
            { 
                question: "Q10 (2023): The number of solutions to the equation |x + 3| + |x - 2| = 7 is:", 
                answer: "D.", 
                options: ["A. 1", "B. 2", "C. 3", "D. 4"] 
            }
        ],
        6: [
            { 
                question: "Q1 (2020): The value of the limit lim(x→0) (sin(x) - x)/(x³) is:", 
                answer: "C.", 
                options: ["A. 0", "B. 1", "C. -1/6", "D. ∞"] 
            },
            { 
                question: "Q2 (2021): The area of the region bounded by the curve y = x² - 4x + 3 and the x-axis is:", 
                answer: "A.", 
                options: ["A. 3", "B. 4", "C. 2", "D. 1"] 
            },
            { 
                question: "Q3 (2022): The integral ∫ (x³ + 2x²) dx is:", 
                answer: "B.", 
                options: ["A. (1/4)x⁴ + (2/3)x³", "B. (1/4)x⁴ + (2/3)x³ + C", "C. (1/5)x⁵ + (1/3)x³ + C", "D. x⁴ + x³ + C"] 
            },
            { 
                question: "Q4 (2023): The equation of the tangent to the curve y = x² + 3x at x = 2 is:", 
                answer: "A.", 
                options: ["A. y = 7x - 8", "B. y = 5x - 2", "C. y = 4x + 3", "D. y = x + 1"] 
            },
            { 
                question: "Q5 (2021): The value of the limit lim(x→∞) (x³ + 3x² + 2x)/(x³ + 2x + 1) is:", 
                answer: "A.", 
                options: ["A. 1", "B. 3", "C. 0", "D. 2"] 
            },
            { 
                question: "Q6 (2022): The solution to the equation x² + 2x + 1 = 0 is:", 
                answer: "D.", 
                options: ["A. x = -1", "B. x = 1", "C. x = 0", "D. x = -1"] 
            },
            { 
                question: "Q7 (2023): The solution to the system of equations x + 2y = 5 and 2x - y = 3 is:", 
                answer: "B.", 
                options: ["A. x = 2, y = 1", "B. x = 3, y = 1", "C. x = 1, y = 2", "D. x = 0, y = 5"] 
            },
            { 
                question: "Q8 (2021): The number of real roots of the equation x² - 4x + 5 = 0 is:", 
                answer: "C.", 
                options: ["A. 0", "B. 1", "C. 2", "D. 3"] 
            },
            { 
                question: "Q9 (2022): The value of the determinant |A| for the matrix A = [[3, 2], [1, 4]] is:", 
                answer: "D.", 
                options: ["A. 10", "B. 5", "C. 7", "D. 10"] 
            },
            { 
                question: "Q10 (2023): The number of solutions to the equation x² + 3x + 2 = 0 is:", 
                answer: "A.", 
                options: ["A. 2", "B. 1", "C. 3", "D. 4"] 
            }
        ],  
        7: [
            { 
                question: "Q1 (2020): The number of real solutions to the equation sin(x) = x/2 is:", 
                answer: "B.", 
                options: ["A. 0", "B. 1", "C. 2", "D. 3"] 
            },
            { 
                question: "Q2 (2021): The area of the region bounded by the curve y = x³ - 3x² + 4x and the x-axis is:", 
                answer: "C.", 
                options: ["A. 4", "B. 5", "C. 6", "D. 7"] 
            },
            { 
                question: "Q3 (2022): The value of the limit lim(x→0) (sin(x) - x + x³/6)/(x⁵) is:", 
                answer: "D.", 
                options: ["A. 0", "B. 1", "C. -1", "D. 1/6"] 
            },
            { 
                question: "Q4 (2023): The value of the integral ∫ (x² + 2x) dx is:", 
                answer: "A.", 
                options: ["A. (1/3)x³ + x² + C", "B. (1/2)x³ + x² + C", "C. (1/3)x³ + x + C", "D. (1/4)x⁴ + x² + C"] 
            },
            { 
                question: "Q5 (2021): The maximum value of the function f(x) = x² - 6x + 10 is:", 
                answer: "C.", 
                options: ["A. 4", "B. 6", "C. 10", "D. 8"] 
            },
            { 
                question: "Q6 (2022): The value of the sum of the series 1 + 3 + 9 + 27 + ... + 3ⁿ is:", 
                answer: "D.", 
                options: ["A. 3ⁿ + 1", "B. 2(3ⁿ - 1)", "C. 3ⁿ - 1", "D. (3ⁿ - 1)/2"] 
            },
            { 
                question: "Q7 (2023): The number of real solutions to the equation x⁴ - 4x² + 3 = 0 is:", 
                answer: "B.", 
                options: ["A. 1", "B. 2", "C. 3", "D. 4"] 
            },
            { 
                question: "Q8 (2021): The equation of the tangent to the curve y = 3x² - 5x at x = 2 is:", 
                answer: "A.", 
                options: ["A. y = 7x - 5", "B. y = 5x + 7", "C. y = 6x - 7", "D. y = x - 3"] 
            },
            { 
                question: "Q9 (2022): The solution to the equation e^(2x) = 4 is:", 
                answer: "D.", 
                options: ["A. ln(4)", "B. ln(2)", "C. 2ln(2)", "D. ln(2)"] 
            },
            { 
                question: "Q10 (2023): The number of solutions to the equation x² + x - 2 = 0 is:", 
                answer: "A.", 
                options: ["A. 2", "B. 1", "C. 3", "D. 0"] 
            }
        ],
        8: [
            { 
                question: "Q1 (2020): The solution to the differential equation y'' + y = 0 is:", 
                answer: "C.", 
                options: ["A. y = e^x", "B. y = cos(x)", "C. y = A cos(x) + B sin(x)", "D. y = A e^x + B e^-x"] 
            },
            { 
                question: "Q2 (2021): The area of the region bounded by the curve y = x² - 2x + 3 and the x-axis is:", 
                answer: "B.", 
                options: ["A. 2", "B. 3", "C. 4", "D. 5"] 
            },
            { 
                question: "Q3 (2022): The value of the limit lim(x→∞) (x³ + 3x² - x)/(x³ + 2x + 1) is:", 
                answer: "A.", 
                options: ["A. 1", "B. 2", "C. 0", "D. ∞"] 
            },
            { 
                question: "Q4 (2023): The number of real solutions to the equation x⁶ - 5x³ + 6 = 0 is:", 
                answer: "B.", 
                options: ["A. 1", "B. 2", "C. 3", "D. 4"] 
            },
            { 
                question: "Q5 (2021): The value of the sum of the series 1 + 1/2 + 1/3 + 1/4 + ... is:", 
                answer: "D.", 
                options: ["A. 2", "B. 1", "C. 3", "D. Diverges"] 
            },
            { 
                question: "Q6 (2022): The equation of the normal to the curve y = x² at x = 1 is:", 
                answer: "C.", 
                options: ["A. y = 2x - 1", "B. y = -2x + 3", "C. y = -x + 2", "D. y = x + 1"] 
            },
            { 
                question: "Q7 (2023): The solution to the equation x³ - 3x² + 2x = 0 is:", 
                answer: "A.", 
                options: ["A. x = 0, 1, 2", "B. x = -1, 1, 2", "C. x = 0, 2", "D. x = 1, -2"] 
            },
            { 
                question: "Q8 (2021): The value of the integral ∫ (x² + 1)/(x³ + 2x) dx is:", 
                answer: "B.", 
                options: ["A. ln(x³ + 2x)", "B. ln(x² + 1)", "C. x³ + 2x", "D. (1/3)x³ + x"] 
            },
            { 
                question: "Q9 (2022): The solution to the system of equations 2x + 3y = 12 and 4x - 5y = 1 is:", 
                answer: "D.", 
                options: ["A. x = 3, y = 2", "B. x = -3, y = 2", "C. x = 2, y = 3", "D. x = 3, y = 1"] 
            },
            { 
                question: "Q10 (2023): The value of the determinant |A| for the matrix A = [[1, 2], [3, 4]] is:", 
                answer: "C.", 
                options: ["A. 1", "B. -1", "C. -2", "D. 2"] 
            }
        ],
        9: [
            { 
                question: "Q1 (2020): The solution to the equation x² + 2x + 1 = 0 is:", 
                answer: "A.", 
                options: ["A. x = -1", "B. x = 1", "C. x = 0", "D. x = -2"] 
            },
            { 
                question: "Q2 (2021): The value of the limit lim(x→0) (sin(x) - x + x³/6)/(x⁵) is:", 
                answer: "B.", 
                options: ["A. 0", "B. 1", "C. 2", "D. -1"] 
            },
            { 
                question: "Q3 (2022): The area of the region bounded by the curve y = x³ + 3x² - 4 and the x-axis is:", 
                answer: "D.", 
                options: ["A. 4", "B. 6", "C. 3", "D. 7"] 
            },
            { 
                question: "Q4 (2023): The number of real solutions to the equation x⁴ - 6x² + 8 = 0 is:", 
                answer: "C.", 
                options: ["A. 1", "B. 2", "C. 4", "D. 3"] 
            },
            { 
                question: "Q5 (2021): The solution to the system of equations x + y = 4 and 2x - y = 3 is:", 
                answer: "A.", 
                options: ["A. x = 3, y = 1", "B. x = 2, y = 2", "C. x = 1, y = 3", "D. x = 4, y = 0"] 
            },
            { 
                question: "Q6 (2022): The value of the integral ∫ e^x (cos x) dx is:", 
                answer: "C.", 
                options: ["A. e^x sin x", "B. e^x cos x", "C. e^x (sin x + cos x)", "D. e^x (cos x - sin x)"] 
            },
            { 
                question: "Q7 (2023): The value of the sum of the series 1 + 1/2 + 1/3 + ... + 1/n is approximately equal to:", 
                answer: "B.", 
                options: ["A. ln(n)", "B. ln(n) + γ", "C. n", "D. n/2"] 
            },
            { 
                question: "Q8 (2021): The tangent to the curve y = x³ - 3x² + 2x at x = 1 is:", 
                answer: "D.", 
                options: ["A. y = 3x - 2", "B. y = -2x + 3", "C. y = x - 1", "D. y = 3x - 1"] 
            },
            { 
                question: "Q9 (2022): The number of real solutions to the equation e^x = x² is:", 
                answer: "C.", 
                options: ["A. 0", "B. 1", "C. 2", "D. 3"] 
            },
            { 
                question: "Q10 (2023): The determinant of the matrix A = [[1, 2], [3, 4]] is:", 
                answer: "D.", 
                options: ["A. 1", "B. 3", "C. 2", "D. -2"] 
            }
        ],
        10: [
            { 
                question: "Q1 (2020): The maximum value of the function f(x) = -x² + 6x - 4 is:", 
                answer: "B.", 
                options: ["A. 1", "B. 5", "C. 3", "D. -1"] 
            },
            { 
                question: "Q2 (2021): The number of real solutions to the equation tan(x) = x is:", 
                answer: "C.", 
                options: ["A. 0", "B. 1", "C. 2", "D. Infinite"] 
            },
            { 
                question: "Q3 (2022): The value of the limit lim(x→∞) (x² + 1)/(x² - 1) is:", 
                answer: "A.", 
                options: ["A. 1", "B. -1", "C. 2", "D. 0"] 
            },
            { 
                question: "Q4 (2023): The integral ∫ cos(x) dx is equal to:", 
                answer: "D.", 
                options: ["A. sin(x)", "B. -sin(x)", "C. cos(x)", "D. sin(x) + C"] 
            },
            { 
                question: "Q5 (2021): The solution to the equation x³ - 3x² + 2x = 0 is:", 
                answer: "B.", 
                options: ["A. x = 1", "B. x = 0, 1, 2", "C. x = 2", "D. x = -1"] 
            },
            { 
                question: "Q6 (2022): The area of the region bounded by the curve y = x² - 3x + 2 and the x-axis is:", 
                answer: "C.", 
                options: ["A. 2", "B. 1", "C. 3", "D. 4"] 
            },
            { 
                question: "Q7 (2023): The value of the integral ∫ (x² + 1)/(x³ + x) dx is:", 
                answer: "A.", 
                options: ["A. ln(x³ + x)", "B. ln(x² + 1)", "C. x³ + x", "D. (1/2)x³"] 
            },
            { 
                question: "Q8 (2021): The value of the sum 1 + 2 + 3 + ... + n is:", 
                answer: "C.", 
                options: ["A. n²", "B. 2n", "C. n(n+1)/2", "D. n³"] 
            },
            { 
                question: "Q9 (2022): The equation of the tangent line to the curve y = x³ + 3x² - 4x at x = 2 is:", 
                answer: "D.", 
                options: ["A. y = 2x - 1", "B. y = x + 1", "C. y = 4x - 2", "D. y = 8x - 10"] 
            },
            { 
                question: "Q10 (2023): The value of the determinant |A| for the matrix A = [[1, 0], [0, 1]] is:", 
                answer: "B.", 
                options: ["A. 1", "B. 0", "C. -1", "D. 2"] 
            }
        ],                                
    },
};

let currentSet = 0;
let currentQuestion = 0;
let userScore = 0;
let currentSubject = "";
let answeredQuestions = []; // Array to track answered questions
let userSelections = {}; // Object to store user selections for each question

// Display the subject selection page after clicking 'Start Practice'
function showSubjects() {
    document.querySelector('.practice-container').classList.add('hidden');
    document.getElementById('subject-section').classList.remove('hidden');
}

// Start practice after selecting a subject
function startPractice(subject) {
    currentSubject = subject; // Store the selected subject
    document.getElementById('subject-section').classList.add('hidden');
    document.getElementById('practice-set-section').classList.remove('hidden');
}

function startSet(setNumber) {
    currentSet = setNumber;
    currentQuestion = 0;
    userScore = 0;
    answeredQuestions = []; // Reset answered questions
    userSelections = {}; // Clear user selections

    // Update the current set display
    const currentSetText = document.getElementById('current-set-text');
    currentSetText.textContent = `JEE MAINS ${capitalizeFirstLetter(currentSubject)}: Practice Set ${currentSet}`;

    document.getElementById('practice-set-section').classList.add('hidden');
    document.getElementById('question-section').classList.remove('hidden');
    loadQuestion(); // Load the first question of the selected set
}

// Helper function to capitalize the first letter of the subject name
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Load the current question for the selected subject and set
function loadQuestion() {
    const question = correctAnswers[currentSubject][currentSet][currentQuestion];
    if (question) {
        document.getElementById('question-text').textContent = question.question;

        // Display the options
        document.querySelectorAll('.answer-btn').forEach((btn, index) => {
            btn.textContent = question.options[index];
            btn.style.backgroundColor = "white"; // Reset background color
            btn.style.color = "black"; // Reset font color
            btn.disabled = false; // Enable buttons initially
        });

        // Always show the Next button (it's positioned on the right by default)
        document.getElementById('next-btn').classList.remove('hidden');

        // Show or hide the Previous button based on the current question
        if (currentQuestion > 0) {
            document.getElementById('previous-btn').classList.remove('hidden'); // Show Previous button
        } else {
            document.getElementById('previous-btn').classList.add('hidden'); // Hide Previous button on the first question
        }

        // If this question was answered already, highlight the selections
        if (answeredQuestions.includes(currentQuestion)) {
            disableAnswers(); // Disable all options
            highlightSelections(); // Highlight the user's selection
        }
    } else {
        showScore(); // Show the score when all questions are answered
    }
}

// Answer the question and check if it's correct
function answerQuestion(selectedOption) {
    const correctOption = correctAnswers[currentSubject][currentSet][currentQuestion].answer.trim(); // Correct answer (e.g., "A.")
    const selectedLetter = selectedOption.charAt(0); // Extract the letter from the selected option (e.g., "A")
    const buttons = document.querySelectorAll('.answer-btn');

    console.log(`Selected Option: ${selectedOption}, Correct Answer: ${correctOption}`);

    // Store the user's selection
    userSelections[currentQuestion] = selectedLetter;

    // Highlight the options based on the selected answer
    buttons.forEach(button => {
        const buttonText = button.textContent.trim(); // Trim button text for any hidden characters or spaces
        if (buttonText.startsWith(correctOption)) {
            button.style.backgroundColor = "green"; // Correct answer
            button.style.color = "white"; // White font for correct option
        } else if (buttonText.startsWith(selectedLetter)) {
            button.style.backgroundColor = "red"; // Only selected wrong answer in red
            button.style.color = "white"; // White font for the selected wrong option
        }
    });

    // Update user score
    if (selectedLetter === correctOption.charAt(0)) { // Compare only the letter (A, B, C, D)
        console.log("Correct answer selected!");
        userScore += 4; // Increment score by +4 for correct answer
    } else {
        userScore -= 1; // Decrement score by -1 for incorrect answer
    }

    answeredQuestions.push(currentQuestion); // Mark this question as answered

    console.log(`Current Score: ${userScore}`); // Log score for debugging

    document.getElementById('next-btn').classList.remove('hidden'); // Show 'Next' button
    disableAnswers(); // Disable all answer options after answering
}

// Highlight the selections when revisiting a question
function highlightSelections() {
    const correctOption = correctAnswers[currentSubject][currentSet][currentQuestion].answer.trim();
    const selectedLetter = userSelections[currentQuestion]; // Get the user's selection for this question
    const buttons = document.querySelectorAll('.answer-btn');

    buttons.forEach(button => {
        const buttonText = button.textContent.trim();
        if (buttonText.startsWith(correctOption)) {
            button.style.backgroundColor = "green"; // Correct answer in green
            button.style.color = "white"; // White font color for correct option
        } else if (buttonText.startsWith(selectedLetter)) {
            button.style.backgroundColor = "red"; // Selected wrong answer in red
            button.style.color = "white"; // White font for wrong option
        } else {
            button.style.backgroundColor = "white"; // Default for unselected options
            button.style.color = "black";
        }
    });
}

// Move to the next question
function nextQuestion() {
    currentQuestion++;
    loadQuestion(); // Load the next question
}

// Go to the previous question
function previousQuestion() {
    currentQuestion--;
    loadQuestion(); // Load the previous question
}

// Disable all answer buttons after the question is answered
function disableAnswers() {
    document.querySelectorAll('.answer-btn').forEach((btn) => {
        btn.disabled = true; // Disable all answer buttons
    });
}

// Show the final score in a pop-up
function showScore() {
    const scoreMessage = document.getElementById('score-message');
    scoreMessage.textContent = `You scored ${userScore} out of 40 in ${capitalizeFirstLetter(currentSubject)} Set ${currentSet}`;

    const popup = document.getElementById('score-popup');
    popup.classList.remove('hidden');
}

// Restart practice and navigate to the same set
document.getElementById('restart-btn').addEventListener('click', () => {
    const popup = document.getElementById('score-popup');
    popup.classList.add('hidden');
    currentQuestion = 0;
    userScore = 0;
    answeredQuestions = [];
    userSelections = {};
    loadQuestion();
});

// Navigate directly to the home page
document.getElementById('home-btn').addEventListener('click', () => {
    const popup = document.getElementById('score-popup');
    popup.classList.add('hidden');
    document.querySelector('.practice-container').classList.remove('hidden');
    document.getElementById('subject-section').classList.add('hidden');
    document.getElementById('practice-set-section').classList.add('hidden');
    document.getElementById('question-section').classList.add('hidden');
});
