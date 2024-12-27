let correctAnswers = {
    physics: {
        1: [
            { 
                question: "Q1 (2018): A particle moves along a straight line with its velocity varying with time as v(t) = at^2 + bt + c. If a = 2 m/s³, b = -3 m/s², and c = 5 m/s, find the displacement of the particle between t = 0 and t = 2 s.", 
                answer: "B.", 
                options: ["A. 10 m", "B. 12 m", "C. 14 m", "D. 16 m"] 
            },
            { 
                question: "Q2 (2019): A thin circular ring of mass M and radius R is rotating about its axis with a constant angular velocity ω. Two particles, each of mass m, are gently attached to the opposite ends of a diameter. The angular velocity of the ring now becomes:", 
                answer: "A.", 
                options: [
                    "A. ω (M / (M + 2m))", 
                    "B. ω (M / (M - 2m))", 
                    "C. ω (2m / M)", 
                    "D. Unchanged"
                ] 
            },
            { 
                question: "Q3 (2021): A spherical shell of radius R is uniformly charged with surface charge density σ. The electric field inside the shell is:", 
                answer: "D.", 
                options: ["A. σ / ε₀", "B. (σ R²) / ε₀", "C. Non-zero and uniform", "D. Zero"] 
            },
            { 
                question: "Q4 (2017): A block of mass m slides down a smooth inclined plane of inclination θ fixed in an elevator going up with an acceleration a. The acceleration of the block relative to the plane is:", 
                answer: "C.", 
                options: [
                    "A. g sin θ + a cos θ", 
                    "B. g sin θ - a cos θ", 
                    "C. g sin θ - a", 
                    "D. g sin θ + a"
                ] 
            },
            { 
                question: "Q5 (2022): A wire of length L is stretched such that its elongation is ΔL. The strain energy per unit volume of the wire is:", 
                answer: "B.", 
                options: [
                    "A. (1/2) EΔL/L", 
                    "B. (1/2) E (ΔL/L)²", 
                    "C. EΔL/L²", 
                    "D. E (ΔL²/L)"
                ] 
            },
            { 
                question: "Q6 (2016): A body of mass m is in circular motion under the action of a force of constant magnitude F. The radius of the circle is R. The time period of the motion is proportional to:", 
                answer: "C.", 
                options: [
                    "A. √R", 
                    "B. 1/√R", 
                    "C. R^1.5", 
                    "D. R^0.5"
                ] 
            },
            { 
                question: "Q7 (2020): A capacitor of capacitance C is charged to a potential V and then connected across an inductor of inductance L. The maximum current in the circuit is:", 
                answer: "A.", 
                options: [
                    "A. V √(C/L)", 
                    "B. V / √(LC)", 
                    "C. V √(L/C)", 
                    "D. V² √(C/L)"
                ] 
            },
            { 
                question: "Q8 (2015): A ball of mass m is thrown vertically upwards with an initial speed u. The maximum height reached is:", 
                answer: "C.", 
                options: [
                    "A. mu² / g", 
                    "B. u² / (2m)", 
                    "C. u² / (2g)", 
                    "D. m²u² / g"
                ] 
            },
            { 
                question: "Q9 (2014): A thin rod of length L and mass M is bent into a semicircular ring. The moment of inertia of the ring about its diameter is:", 
                answer: "B.", 
                options: [
                    "A. ML² / 4", 
                    "B. ML² / 8", 
                    "C. 2ML² / 5", 
                    "D. ML² / 12"
                ] 
            },
            { 
                question: "Q10 (2013): A spring of spring constant k is compressed by a distance x. The potential energy stored in the spring is:", 
                answer: "A.", 
                options: [
                    "A. (1/2)kx²", 
                    "B. kx²", 
                    "C. (1/2)kx", 
                    "D. kx"
                ] 
            }
        ],
        2: [
            { 
                question: "Q1 (2021): A conducting circular loop of radius r is placed in a uniform magnetic field B with the plane of the loop perpendicular to the field. If the magnetic field changes at a constant rate, what is the induced EMF in the loop?", 
                answer: "C.", 
                options: [
                    "A. B r²", 
                    "B. 2π r B", 
                    "C. π r² dB/dt", 
                    "D. 2π r² dB/dt"
                ] 
            },
            { 
                question: "Q2 (2020): A particle moves in a potential \( V(x) = -\frac{k}{x^2} \), where k is a constant. Find the equation for the effective potential energy of the particle and the radial force acting on it.", 
                answer: "B.", 
                options: [
                    "A. \( V_{eff}(x) = -\frac{k}{x} \)", 
                    "B. \( V_{eff}(x) = -\frac{k}{x^2} + \frac{l^2}{2mx^2} \)", 
                    "C. \( V_{eff}(x) = -\frac{k}{x^3} \)", 
                    "D. \( V_{eff}(x) = \frac{l^2}{2mx^2} \)"
                ] 
            },
            { 
                question: "Q3 (2019): In a system with two coupled oscillators, the equations of motion for displacements \( x_1(t) \) and \( x_2(t) \) are given by \( m\ddot{x_1} + k(x_1 - x_2) = 0 \) and \( m\ddot{x_2} + k(x_2 - x_1) = 0 \). The frequency of oscillation of the system is:", 
                answer: "C.", 
                options: [
                    "A. \( \sqrt{\frac{k}{m}} \)", 
                    "B. \( \sqrt{\frac{2k}{m}} \)", 
                    "C. \( \sqrt{\frac{k}{m}} \) and \( \sqrt{\frac{2k}{m}} \)", 
                    "D. \( \sqrt{\frac{3k}{m}} \)"
                ] 
            },
            { 
                question: "Q4 (2021): A uniform electric field \( E \) is applied to a particle of charge \( q \) and mass \( m \). If the particle starts from rest, what is the time taken for the particle to travel a distance \( d \)?", 
                answer: "B.", 
                options: [
                    "A. \( \sqrt{\frac{2md}{qE}} \)", 
                    "B. \( \frac{d}{qE} \)", 
                    "C. \( \frac{d}{\sqrt{qEd}} \)", 
                    "D. \( \frac{2d}{qE} \)"
                ] 
            },
            { 
                question: "Q5 (2020): The torque on a coil of n turns, each with area A, carrying a current I in a magnetic field B is given by \( \tau = n I A B \sin\theta \), where \( \theta \) is the angle between the magnetic field and the normal to the coil. If the current in the coil is reversed, how does the torque change?", 
                answer: "A.", 
                options: [
                    "A. Reverses direction", 
                    "B. Increases", 
                    "C. Decreases", 
                    "D. Remains unchanged"
                ] 
            },
            { 
                question: "Q6 (2019): A spherical shell of radius R and mass M is rotating about its diameter with an angular velocity \( \omega \). Find the moment of inertia of the shell about a tangent.", 
                answer: "C.", 
                options: [
                    "A. \( \frac{2}{3}MR^2 \)", 
                    "B. \( \frac{5}{3}MR^2 \)", 
                    "C. \( \frac{7}{3}MR^2 \)", 
                    "D. \( 2MR^2 \)"
                ] 
            },
            { 
                question: "Q7 (2022): A mass m is dropped from a height h in a viscous fluid. After reaching terminal velocity, the velocity of the particle is:", 
                answer: "D.", 
                options: [
                    "A. \( v = \sqrt{2gh} \)", 
                    "B. \( v = \frac{gh}{2} \)", 
                    "C. \( v = \frac{2gh}{v_f} \)", 
                    "D. Constant (not dependent on h)"
                ] 
            },
            { 
                question: "Q8 (2020): In a Young’s double-slit experiment, the separation between the slits is \( d \) and the wavelength of light is \( \lambda \). The distance between the screen and the slits is D. The angular separation between the two adjacent maxima is:", 
                answer: "B.", 
                options: [
                    "A. \( \frac{\lambda}{d} \)", 
                    "B. \( \frac{\lambda}{dD} \)", 
                    "C. \( \frac{d}{\lambda D} \)", 
                    "D. \( \frac{d}{\lambda} \)"
                ] 
            },
            { 
                question: "Q9 (2021): A particle moves in the central potential \( V(r) = -\frac{k}{r^n} \). The effective potential is given by:", 
                answer: "C.", 
                options: [
                    "A. \( V_{eff}(r) = -\frac{k}{r} + \frac{l^2}{2mr^2} \)", 
                    "B. \( V_{eff}(r) = -\frac{k}{r^n} + \frac{l^2}{2mr^2} \)", 
                    "C. \( V_{eff}(r) = -\frac{k}{r^n} + \frac{l^2}{2mr^2} \)", 
                    "D. \( V_{eff}(r) = -\frac{k}{r} + \frac{l^2}{mr^3} \)"
                ] 
            },
            { 
                question: "Q10 (2018): A particle is projected from the surface of a planet with escape velocity. If the gravitational potential energy at the surface is \( U \), what is the total mechanical energy of the particle?", 
                answer: "D.", 
                options: [
                    "A. \( -U \)", 
                    "B. \( U \)", 
                    "C. \( \frac{U}{2} \)", 
                    "D. \( 0 \)"
                ] 
            }
        ],
        3: [
            { 
                question: "Q1 (2020): A spherical body of radius R and mass M is rotating with angular velocity ω about its own axis. The total kinetic energy is:", 
                answer: "A.", 
                options: [
                    "A. (1/2) Iω²", 
                    "B. (3/4) Iω²", 
                    "C. (1/2) Mω²R²", 
                    "D. (1/5) Iω²"
                ] 
            },
            { 
                question: "Q2 (2019): A particle moves in a potential field given by V(x) = - (a/x), where a is a constant. What is the force acting on the particle?", 
                answer: "B.", 
                options: [
                    "A. a/x²", 
                    "B. a/x²", 
                    "C. - a/x²", 
                    "D. -a/x"
                ] 
            },
            { 
                question: "Q3 (2021): A charged particle moves in a uniform magnetic field. If the velocity of the particle makes an angle θ with the magnetic field, the pitch of the helical trajectory is:", 
                answer: "C.", 
                options: [
                    "A. v sin(θ)/B", 
                    "B. v cos(θ)/B", 
                    "C. v sin(θ)/qB", 
                    "D. v cos(θ)/qB"
                ] 
            },
            { 
                question: "Q4 (2020): In the Bohr model of the hydrogen atom, the angular momentum of the electron is quantized. The value of angular momentum for the second orbit is:", 
                answer: "D.", 
                options: [
                    "A. h", 
                    "B. 2h", 
                    "C. 3h", 
                    "D. 2h/π"
                ] 
            },
            { 
                question: "Q5 (2018): A particle of mass m is moving in a potential field given by V(x) = -k/x³. The effective potential is:", 
                answer: "C.", 
                options: [
                    "A. -k/x³ + l²/(2mx²)", 
                    "B. -k/x³ + l²/(mx²)", 
                    "C. -k/x³ + l²/(2m²x²)", 
                    "D. -k/x³ + l²/(m²x²)"
                ] 
            },
            { 
                question: "Q6 (2021): The potential energy of a system is given by U(x) = kx⁴. The force acting on the particle is:", 
                answer: "A.", 
                options: [
                    "A. -4kx³", 
                    "B. 4kx³", 
                    "C. kx³", 
                    "D. -kx²"
                ] 
            },
            { 
                question: "Q7 (2022): A point mass m is revolving in a circular orbit under the influence of a central force. If the angular momentum of the particle is constant, the centripetal force is:", 
                answer: "B.", 
                options: [
                    "A. mω²r", 
                    "B. mω²r²", 
                    "C. m²ω²r", 
                    "D. mω²r"
                ] 
            },
            { 
                question: "Q8 (2019): A uniform electric field E is applied between two plates. The potential difference between the plates is V. What is the energy stored in the electric field between the plates?", 
                answer: "D.", 
                options: [
                    "A. (1/2) CV²", 
                    "B. CV", 
                    "C. (1/2) EV", 
                    "D. (1/2) ε₀A(V/d)"
                ] 
            },
            { 
                question: "Q9 (2021): The magnetic field at a point on the axis of a circular current loop of radius R and current I is given by B. If the radius is doubled and the current is halved, what will be the new magnetic field?", 
                answer: "C.", 
                options: [
                    "A. B/2", 
                    "B. 2B", 
                    "C. B/4", 
                    "D. B"
                ] 
            },
            { 
                question: "Q10 (2020): A thin uniform rod of length L and mass M is pivoted at one end. The period of oscillation of the rod is:", 
                answer: "A.", 
                options: [
                    "A. (2π√(L/3g))", 
                    "B. (2π√(L/g))", 
                    "C. (2π√(3L/g))", 
                    "D. (π√(L/g))"
                ] 
            }
        ],                 
        4: [
            { 
                question: "Q1 (2020): A solid sphere of radius R and mass M is rotating with angular velocity ω. What is the total kinetic energy of the sphere?", 
                answer: "C.", 
                options: [
                    "A. (1/2)Mω²R²", 
                    "B. (3/5)Mω²R²", 
                    "C. (7/10)Mω²R²", 
                    "D. (2/5)Mω²R²"
                ] 
            },
            { 
                question: "Q2 (2019): A charged particle of charge q and mass m moves in a uniform magnetic field B. The radius of its circular path is r. What is the energy of the particle?", 
                answer: "B.", 
                options: [
                    "A. (qB/m) r²", 
                    "B. (1/2)mv²", 
                    "C. qBr", 
                    "D. (q²B²r²)/(2m)"
                ] 
            },
            { 
                question: "Q3 (2022): A particle moves under a central force with potential V(r) = - k/r². The total mechanical energy is:", 
                answer: "C.", 
                options: [
                    "A. k/r", 
                    "B. l²/(2mr²)", 
                    "C. 0", 
                    "D. - k/r²"
                ] 
            },
            { 
                question: "Q4 (2021): The electric field due to a uniformly charged infinite plane sheet is:", 
                answer: "A.", 
                options: [
                    "A. σ/(2ε₀)", 
                    "B. σ/ε₀", 
                    "C. σ/(4ε₀)", 
                    "D. ε₀/σ"
                ] 
            },
            { 
                question: "Q5 (2018): A particle is projected with velocity v at an angle θ. The height of projection is given by h. What is the time taken to reach the maximum height?", 
                answer: "A.", 
                options: [
                    "A. v sin(θ)/g", 
                    "B. v cos(θ)/g", 
                    "C. 2v sin(θ)/g", 
                    "D. v sin(θ)/(2g)"
                ] 
            },
            { 
                question: "Q6 (2021): A body is dropped from a height h. Neglecting air resistance, what will be the velocity of the body after time t?", 
                answer: "B.", 
                options: [
                    "A. gt²", 
                    "B. g t", 
                    "C. g t²/2", 
                    "D. h/t"
                ] 
            },
            { 
                question: "Q7 (2022): A mass m is attached to the end of a spring with spring constant k. If the amplitude of oscillation is A, what is the maximum speed of the mass?", 
                answer: "C.", 
                options: [
                    "A. (kA)/m", 
                    "B. kA", 
                    "C. √(k/m) * A", 
                    "D. A√(k/m)"
                ] 
            },
            { 
                question: "Q8 (2020): In a Young’s double-slit experiment, the separation between the slits is d and the wavelength of light is λ. The angular separation between the two adjacent maxima is:", 
                answer: "B.", 
                options: [
                    "A. λ/d", 
                    "B. λ/(dD)", 
                    "C. d/(λD)", 
                    "D. d/λ"
                ] 
            },
            { 
                question: "Q9 (2021): A particle moves in the central potential V(r) = - k/r². The effective potential is given by:", 
                answer: "C.", 
                options: [
                    "A. V_eff(r) = -k/r + l²/(2mr²)", 
                    "B. V_eff(r) = -k/r + l²/(mr²)", 
                    "C. V_eff(r) = -k/r² + l²/(2mr²)", 
                    "D. V_eff(r) = -k/r + l²/(mr²)"
                ] 
            },
            { 
                question: "Q10 (2019): A particle is projected with the escape velocity from the surface of a planet. The total mechanical energy of the particle is:", 
                answer: "D.", 
                options: [
                    "A. -U", 
                    "B. U", 
                    "C. U/2", 
                    "D. 0"
                ] 
            }
        ], 
        5: [
            { 
                question: "Q1 (2022): A particle of mass m is moving in a potential field given by V(x) = kx⁴. The total energy of the particle is E. The range of the particle’s motion is:", 
                answer: "D.", 
                options: [
                    "A. E/k", 
                    "B. (E/k)^(1/4)", 
                    "C. (E/k)^(1/2)", 
                    "D. (E/k)^(1/3)"
                ] 
            },
            { 
                question: "Q2 (2021): A body of mass m moves under the action of a force F = -kx³. The potential energy corresponding to this force is:", 
                answer: "C.", 
                options: [
                    "A. (kx⁴)/4", 
                    "B. - (kx⁴)/4", 
                    "C. - (kx⁴)/2", 
                    "D. (kx²)/2"
                ] 
            },
            { 
                question: "Q3 (2020): A wire of length L and mass M is placed in a uniform magnetic field B. The wire carries a current I perpendicular to the field. The force on the wire is:", 
                answer: "B.", 
                options: [
                    "A. ILB", 
                    "B. IBL", 
                    "C. I²LB", 
                    "D. B²IL"
                ] 
            },
            { 
                question: "Q4 (2022): A uniform electric field is applied between two conducting plates. The capacitance of the plates is C. If the electric field is doubled, what is the new capacitance?", 
                answer: "A.", 
                options: [
                    "A. C", 
                    "B. 2C", 
                    "C. C/2", 
                    "D. 4C"
                ] 
            },
            { 
                question: "Q5 (2021): A particle of mass m is moving in a potential V(x) = kx² + lx³. What is the force acting on the particle?", 
                answer: "D.", 
                options: [
                    "A. -2kx - 3lx²", 
                    "B. -kx - lx²", 
                    "C. -kx + lx²", 
                    "D. -2kx + 3lx²"
                ] 
            },
            { 
                question: "Q6 (2020): A point mass m is placed in a uniform gravitational field. The potential energy of the mass is given by U = mgz. If the mass is displaced by a small distance, the restoring force is:", 
                answer: "B.", 
                options: [
                    "A. mgz", 
                    "B. mg", 
                    "C. 2mgz", 
                    "D. mgz²"
                ] 
            },
            { 
                question: "Q7 (2021): A particle of charge q and mass m moves in a circular path of radius r in a magnetic field B. The time period of the motion is:", 
                answer: "C.", 
                options: [
                    "A. (2πm)/(qBr)", 
                    "B. (2πr)/(qB)", 
                    "C. (2πm)/(qrB)", 
                    "D. (2πr)/(mB)"
                ] 
            },
            { 
                question: "Q8 (2022): A system consists of two point charges, q₁ and q₂, separated by a distance r. The electric potential energy of the system is:", 
                answer: "A.", 
                options: [
                    "A. (kq₁q₂)/r", 
                    "B. (kq₁q₂)/2r", 
                    "C. (kq₁q₂)/r²", 
                    "D. (kq₁q₂)/r³"
                ] 
            },
            { 
                question: "Q9 (2020): A mass m is attached to a spring and undergoes simple harmonic motion with amplitude A. The maximum potential energy of the spring is:", 
                answer: "C.", 
                options: [
                    "A. (1/2)kA²", 
                    "B. (1/4)kA²", 
                    "C. (1/2)kA²", 
                    "D. kA²"
                ] 
            },
            { 
                question: "Q10 (2021): The magnetic field at the center of a circular loop of radius R carrying current I is B. If the current is doubled and the radius is halved, what is the new magnetic field?", 
                answer: "B.", 
                options: [
                    "A. 4B", 
                    "B. 8B", 
                    "C. 2B", 
                    "D. B"
                ] 
            }
        ],
        6: [
            { 
                question: "Q1 (2022): A particle of mass m is moving in a potential field given by V(x) = -α/x². The total mechanical energy of the particle is E. The maximum distance the particle can reach is:", 
                answer: "C.", 
                options: [
                    "A. (α/E)^(1/3)", 
                    "B. (α/E)^(1/2)", 
                    "C. (α/E)^(1/4)", 
                    "D. (α/E)^(2/3)"
                ] 
            },
            { 
                question: "Q2 (2021): A rod of length L and mass M is placed on a horizontal frictionless surface. A force F is applied at the free end of the rod. The angular acceleration of the rod is:", 
                answer: "B.", 
                options: [
                    "A. F/(ML²)", 
                    "B. 3F/(2ML²)", 
                    "C. F/(2ML²)", 
                    "D. F/(ML)"
                ] 
            },
            { 
                question: "Q3 (2020): A particle is projected from the surface of the Earth with an initial velocity of v at an angle of 45° to the horizontal. The particle escapes the gravitational field. The escape velocity is:", 
                answer: "A.", 
                options: [
                    "A. √(2gR)", 
                    "B. √(gR)", 
                    "C. 2gR", 
                    "D. √(gR)"
                ] 
            },
            { 
                question: "Q4 (2022): A point charge Q is placed at the center of a spherical shell of radius R. The electric field at a distance r (r > R) from the charge is:", 
                answer: "C.", 
                options: [
                    "A. Q/(4πε₀r²)", 
                    "B. 0", 
                    "C. Q/(4πε₀r²)", 
                    "D. Q/(4πr)"
                ] 
            },
            { 
                question: "Q5 (2020): The period of oscillation of a simple pendulum of length L is given by T = 2π√(L/g). If the length is doubled and the gravitational field is halved, the new period is:", 
                answer: "D.", 
                options: [
                    "A. 2T", 
                    "B. √2T", 
                    "C. T", 
                    "D. 2√2T"
                ] 
            },
            { 
                question: "Q6 (2019): A proton is moving in a magnetic field with a velocity v perpendicular to the magnetic field B. The radius of its circular path is R. The kinetic energy of the proton is:", 
                answer: "B.", 
                options: [
                    "A. (qB²R²)/2m", 
                    "B. (q²B²R²)/2m", 
                    "C. (qB²R²)/m", 
                    "D. (qBR)/2m"
                ] 
            },
            { 
                question: "Q7 (2022): In the Bohr model of the hydrogen atom, the energy of the electron in the second orbit is E. The energy of the electron in the third orbit is:", 
                answer: "C.", 
                options: [
                    "A. E/2", 
                    "B. E/3", 
                    "C. -E/4", 
                    "D. -E/9"
                ] 
            },
            { 
                question: "Q8 (2020): A capacitor with capacitance C is charged to a voltage V. The energy stored in the capacitor is:", 
                answer: "A.", 
                options: [
                    "A. (1/2)CV²", 
                    "B. CV", 
                    "C. V²/C", 
                    "D. (1/2)V²/C"
                ] 
            },
            { 
                question: "Q9 (2021): A particle of charge q moves with velocity v in a magnetic field B. The force on the particle is F. If the velocity is doubled and the magnetic field is halved, the new force is:", 
                answer: "B.", 
                options: [
                    "A. F", 
                    "B. 2F", 
                    "C. F/2", 
                    "D. 4F"
                ] 
            },
            { 
                question: "Q10 (2022): A thin uniform ring of mass M and radius R rotates about an axis passing through its center and perpendicular to its plane. The moment of inertia of the ring is:", 
                answer: "A.", 
                options: [
                    "A. MR²", 
                    "B. (1/2)MR²", 
                    "C. (1/4)MR²", 
                    "D. (3/4)MR²"
                ] 
            }
        ],
        7: [
            { 
                question: "Q1 (2022): A thin uniform rod of mass M and length L is rotating about an axis through one end, perpendicular to its length. The angular velocity of the rod is ω. The rotational kinetic energy of the rod is:", 
                answer: "A.", 
                options: [
                    "A. (1/3)Mω²L²", 
                    "B. (1/2)Mω²L²", 
                    "C. (1/4)Mω²L²", 
                    "D. (1/6)Mω²L²"
                ] 
            },
            { 
                question: "Q2 (2021): In a Young’s double-slit experiment, the slits are separated by distance d, and the screen is placed at a distance D from the slits. The wavelength of the light is λ. The angular width of the central diffraction maximum is:", 
                answer: "C.", 
                options: [
                    "A. λ/d", 
                    "B. 2λ/d", 
                    "C. λ/D", 
                    "D. 2λ/D"
                ] 
            },
            { 
                question: "Q3 (2020): The period of oscillation of a simple pendulum is given by T = 2π√(L/g). If the pendulum is immersed in a liquid of density ρ, the period will:", 
                answer: "B.", 
                options: [
                    "A. Increase", 
                    "B. Decrease", 
                    "C. Remain the same", 
                    "D. First increase and then decrease"
                ] 
            },
            { 
                question: "Q4 (2022): In a resonance tube experiment, the fundamental frequency is f. If the length of the tube is halved and the frequency is doubled, the new fundamental frequency will be:", 
                answer: "A.", 
                options: [
                    "A. 2f", 
                    "B. f", 
                    "C. 4f", 
                    "D. √2f"
                ] 
            },
            { 
                question: "Q5 (2021): A particle of charge q is moving in a circular orbit in a uniform magnetic field B. The radius of the orbit is R. The frequency of revolution of the particle is:", 
                answer: "D.", 
                options: [
                    "A. qB/2πm", 
                    "B. 2πm/qB", 
                    "C. qB/m", 
                    "D. qB/2πm"
                ] 
            },
            { 
                question: "Q6 (2020): A sound wave travels through air at a velocity of v and frequency f. The wavelength of the sound is:", 
                answer: "C.", 
                options: [
                    "A. v/f", 
                    "B. v²/f", 
                    "C. v/f", 
                    "D. f/v"
                ] 
            },
            { 
                question: "Q7 (2022): A light wave of frequency f is incident on a medium with refractive index n. The speed of light in the medium is:", 
                answer: "A.", 
                options: [
                    "A. c/n", 
                    "B. n/c", 
                    "C. c", 
                    "D. n²c"
                ] 
            },
            { 
                question: "Q8 (2021): A body of mass M is connected to a spring with spring constant k. The system is in simple harmonic motion with amplitude A. The total mechanical energy of the system is:", 
                answer: "B.", 
                options: [
                    "A. (1/2)kA²", 
                    "B. (1/2)kA²", 
                    "C. (1/4)kA²", 
                    "D. kA²"
                ] 
            },
            { 
                question: "Q9 (2022): A solid sphere of mass M and radius R rolls without slipping down an incline. The acceleration of the center of mass is:", 
                answer: "D.", 
                options: [
                    "A. gsin(θ)/2", 
                    "B. gsin(θ)/3", 
                    "C. gsin(θ)", 
                    "D. 5gsin(θ)/7"
                ] 
            },
            { 
                question: "Q10 (2021): A particle is projected with velocity u at an angle θ to the horizontal. The time of flight of the projectile is:", 
                answer: "A.", 
                options: [
                    "A. (2u sin(θ))/g", 
                    "B. (u sin(θ))/g", 
                    "C. (u cos(θ))/g", 
                    "D. (2u cos(θ))/g"
                ] 
            }
        ],
        8: [
            { 
                question: "Q1 (2022): A uniform electric field E is applied to a charged particle of charge q and mass m. The particle moves with an initial velocity u. The time taken by the particle to travel a distance d is:", 
                answer: "C.", 
                options: [
                    "A. (d/mqE)", 
                    "B. (2d/mqE)", 
                    "C. (d/mqE + u)", 
                    "D. (d/qE)"
                ] 
            },
            { 
                question: "Q2 (2021): A rotating disc of radius R and moment of inertia I is subjected to a torque τ. The angular acceleration of the disc is:", 
                answer: "A.", 
                options: [
                    "A. τ/I", 
                    "B. I/τ", 
                    "C. τR", 
                    "D. R/τ"
                ] 
            },
            { 
                question: "Q3 (2020): A particle moves in a potential given by V(x) = A/x². The force acting on the particle is:", 
                answer: "B.", 
                options: [
                    "A. -2A/x³", 
                    "B. 2A/x³", 
                    "C. A/x³", 
                    "D. -A/x³"
                ] 
            },
            { 
                question: "Q4 (2022): A spherical shell of radius R and mass M is rotating about an axis passing through its center and perpendicular to its plane. The rotational kinetic energy of the shell is:", 
                answer: "C.", 
                options: [
                    "A. (1/2)MR²ω²", 
                    "B. (1/3)MR²ω²", 
                    "C. (2/5)MR²ω²", 
                    "D. (1/4)MR²ω²"
                ] 
            },
            { 
                question: "Q5 (2021): A charged particle enters a magnetic field at an angle θ to the field. The radius of its circular path is r. The velocity of the particle is:", 
                answer: "D.", 
                options: [
                    "A. rB/q", 
                    "B. rB/qm", 
                    "C. qBr", 
                    "D. qBr/m"
                ] 
            },
            { 
                question: "Q6 (2020): The period of a simple pendulum of length L and mass m is T. If the pendulum is immersed in a liquid of density ρ, the period will:", 
                answer: "B.", 
                options: [
                    "A. Increase", 
                    "B. Decrease", 
                    "C. Remain the same", 
                    "D. First increase and then decrease"
                ] 
            },
            { 
                question: "Q7 (2021): A spherical capacitor has inner radius r₁ and outer radius r₂. The capacitance of the capacitor is:", 
                answer: "A.", 
                options: [
                    "A. 4πε₀r₁r₂/(r₂ - r₁)", 
                    "B. 4πε₀r₁r₂/(r₁ + r₂)", 
                    "C. 4πε₀r₁²/(r₂ - r₁)", 
                    "D. 4πε₀r₂²/(r₂ - r₁)"
                ] 
            },
            { 
                question: "Q8 (2022): A thin lens of focal length f is placed in front of an object at a distance u. The image formed by the lens is:", 
                answer: "C.", 
                options: [
                    "A. At a distance f", 
                    "B. At a distance u", 
                    "C. At a distance v such that 1/f = 1/u + 1/v", 
                    "D. At a distance v such that 1/f = 1/v - 1/u"
                ] 
            },
            { 
                question: "Q9 (2020): A particle of mass m is moving under a central force F(r) = -kr. The potential energy of the particle is:", 
                answer: "B.", 
                options: [
                    "A. kr²", 
                    "B. -kr²/2", 
                    "C. -kr", 
                    "D. kr"
                ] 
            },
            { 
                question: "Q10 (2021): A body of mass m is moving with velocity v in a magnetic field B. The angle between the velocity vector and the magnetic field is θ. The force on the body is:", 
                answer: "A.", 
                options: [
                    "A. qvB sin(θ)", 
                    "B. qvB cos(θ)", 
                    "C. qB sin(θ)", 
                    "D. qB cos(θ)"
                ] 
            }
        ],
        9: [
            { 
                question: "Q1 (2022): A particle moves in a potential field V(x) = -α/x³. The force acting on the particle is:", 
                answer: "C.", 
                options: [
                    "A. -3α/x⁴", 
                    "B. 3α/x⁴", 
                    "C. 3α/x⁴", 
                    "D. -3α/x²"
                ] 
            },
            { 
                question: "Q2 (2021): A body of mass m is moving along a straight line under the influence of a force F(x) = -kx. The potential energy of the system is:", 
                answer: "A.", 
                options: [
                    "A. (1/2)kx²", 
                    "B. (1/4)kx²", 
                    "C. kx²", 
                    "D. (1/3)kx²"
                ] 
            },
            { 
                question: "Q3 (2020): A gas undergoes an isothermal expansion from volume V₁ to V₂. The work done by the gas during this process is:", 
                answer: "B.", 
                options: [
                    "A. nRT ln(V₂/V₁)", 
                    "B. nRT ln(V₁/V₂)", 
                    "C. nRT ln(P₂/P₁)", 
                    "D. nRT ln(V₁/V₂)"
                ] 
            },
            { 
                question: "Q4 (2022): A particle of charge q and mass m enters a uniform magnetic field B perpendicular to the velocity of the particle. The frequency of revolution of the particle is:", 
                answer: "D.", 
                options: [
                    "A. qB/m", 
                    "B. mB/q", 
                    "C. q/mB", 
                    "D. qB/m"
                ] 
            },
            { 
                question: "Q5 (2021): In a Young's double-slit experiment, the distance between the slits is d and the wavelength of light is λ. The distance between the first and second minima on the screen is:", 
                answer: "A.", 
                options: [
                    "A. λd/L", 
                    "B. λL/d", 
                    "C. λd", 
                    "D. 2λd/L"
                ] 
            },
            { 
                question: "Q6 (2020): A particle moves in a potential energy function V(x) = αx². The period of oscillation of the particle is:", 
                answer: "C.", 
                options: [
                    "A. 2π√(m/α)", 
                    "B. 2π√(α/m)", 
                    "C. 2π√(m/α)", 
                    "D. 2π√(α/m)"
                ] 
            },
            { 
                question: "Q7 (2022): A spherical capacitor of inner radius r₁ and outer radius r₂ is charged. The capacitance is:", 
                answer: "A.", 
                options: [
                    "A. 4πε₀r₁r₂/(r₂ - r₁)", 
                    "B. 4πε₀r₁²/(r₂ - r₁)", 
                    "C. 4πε₀r₂²/(r₂ - r₁)", 
                    "D. 4πε₀r₁r₂/(r₁ + r₂)"
                ] 
            },
            { 
                question: "Q8 (2021): A rod of length L and mass M is rotating about an axis through its center perpendicular to its length. The rotational kinetic energy of the rod is:", 
                answer: "B.", 
                options: [
                    "A. (1/2)ML²ω²", 
                    "B. (1/12)ML²ω²", 
                    "C. (1/8)ML²ω²", 
                    "D. (1/4)ML²ω²"
                ] 
            },
            { 
                question: "Q9 (2022): The time period of a simple harmonic oscillator is T. If the amplitude is doubled, the new time period becomes:", 
                answer: "C.", 
                options: [
                    "A. T", 
                    "B. 2T", 
                    "C. T/√2", 
                    "D. 4T"
                ] 
            },
            { 
                question: "Q10 (2020): A light ray passes from air to a medium of refractive index n. The angle of incidence is i. The angle of refraction is r. The relation between i and r is:", 
                answer: "A.", 
                options: [
                    "A. sin(i)/sin(r) = n", 
                    "B. sin(i)/sin(r) = 1/n", 
                    "C. sin(i) = sin(r)", 
                    "D. tan(i) = tan(r)"
                ] 
            }
        ],
        10: [
            { 
                question: "Q1 (2023): A particle of charge q and mass m is moving in a magnetic field B with velocity v making an angle θ with the field. The force on the particle is:", 
                answer: "C.", 
                options: [
                    "A. qvB cos(θ)", 
                    "B. qvB sin(θ)", 
                    "C. qvB sin(θ)", 
                    "D. qvB cos(θ)"
                ] 
            },
            { 
                question: "Q2 (2021): A body of mass m is moving under the influence of a central force F(r) = -kr⁴. The equation for the effective potential energy is:", 
                answer: "A.", 
                options: [
                    "A. V_eff(r) = -kr⁴ + L²/(2mr²)", 
                    "B. V_eff(r) = kr⁴ + L²/(2mr²)", 
                    "C. V_eff(r) = -kr² + L²/(2mr²)", 
                    "D. V_eff(r) = kr² + L²/(2mr²)"
                ] 
            },
            { 
                question: "Q3 (2022): In a Young's double-slit experiment, the separation between the slits is d and the distance from the slits to the screen is L. If the wavelength of the light is λ, the distance between the first and third maxima on the screen is:", 
                answer: "D.", 
                options: [
                    "A. λL/d", 
                    "B. 2λL/d", 
                    "C. 3λL/d", 
                    "D. 2λL/d"
                ] 
            },
            { 
                question: "Q4 (2021): A particle moves under a potential V(x) = αx³. The force on the particle at position x is:", 
                answer: "B.", 
                options: [
                    "A. -3αx²", 
                    "B. -3αx²", 
                    "C. -αx²", 
                    "D. -αx³"
                ] 
            },
            { 
                question: "Q5 (2023): A proton is moving in a magnetic field B, and the angle between the velocity of the proton and the magnetic field is θ. The force on the proton is:", 
                answer: "A.", 
                options: [
                    "A. qvB sin(θ)", 
                    "B. qvB cos(θ)", 
                    "C. qvB", 
                    "D. qvB tan(θ)"
                ] 
            },
            { 
                question: "Q6 (2020): A particle is moving in a potential V(x) = -α/x². The force acting on the particle is:", 
                answer: "D.", 
                options: [
                    "A. 2α/x³", 
                    "B. -2α/x³", 
                    "C. -α/x", 
                    "D. -2α/x³"
                ] 
            },
            { 
                question: "Q7 (2021): A cylindrical shell of radius r and mass M is rotating about its axis with angular velocity ω. The rotational kinetic energy of the system is:", 
                answer: "C.", 
                options: [
                    "A. (1/2)Mω²r²", 
                    "B. (1/4)Mω²r²", 
                    "C. (1/2)Mω²r²", 
                    "D. (1/3)Mω²r²"
                ] 
            },
            { 
                question: "Q8 (2022): The time period of a simple pendulum of length L is T. If the length of the pendulum is doubled, the new period becomes:", 
                answer: "B.", 
                options: [
                    "A. √2T", 
                    "B. 2T", 
                    "C. T/√2", 
                    "D. 4T"
                ] 
            },
            { 
                question: "Q9 (2020): A particle of mass m and velocity v enters a uniform magnetic field B at an angle θ to the magnetic field. The radius of the path of the particle is:", 
                answer: "A.", 
                options: [
                    "A. mv/qB sin(θ)", 
                    "B. mv/qB", 
                    "C. mv/qB cos(θ)", 
                    "D. qB/mv sin(θ)"
                ] 
            },
            { 
                question: "Q10 (2023): A body is subjected to a central force F(r) = -kr². The potential energy associated with the force is:", 
                answer: "B.", 
                options: [
                    "A. -kr³", 
                    "B. -kr³/3", 
                    "C. kr²", 
                    "D. kr³"
                ] 
            }
        ],                                                       
    },
    chemistry: {
        1: [
            {
                question: "Q1 (2022): The equilibrium constant Kp for the reaction, N₂(g) + 3H₂(g) ⇌ 2NH₃(g), is related to Kc by the relation:",
                answer: "B.",
                options: [
                    "A. Kp = Kc", 
                    "B. Kp = Kc(RT)^(Δn)", 
                    "C. Kp = Kc/(RT)^(Δn)", 
                    "D. Kp = Kc(RT)"
                ]
            },
            {
                question: "Q2 (2021): For the reaction, A(g) + B(g) ⇌ C(g), the rate constant k is given by k = 3 × 10⁻³ mol/L/s. If the concentration of A is 0.5 mol/L and that of B is 0.2 mol/L, what is the rate of the reaction?",
                answer: "D.",
                options: [
                    "A. 1 × 10⁻³ mol/L/s", 
                    "B. 1.5 × 10⁻³ mol/L/s", 
                    "C. 3 × 10⁻³ mol/L/s", 
                    "D. 3 × 10⁻⁴ mol/L/s"
                ]
            },
            {
                question: "Q3 (2022): In a titration experiment, the endpoint is reached when 25 mL of NaOH solution is required to neutralize 50 mL of HCl solution. If the concentration of NaOH is 0.1 M, what is the concentration of HCl?",
                answer: "C.",
                options: [
                    "A. 0.1 M", 
                    "B. 0.05 M", 
                    "C. 0.2 M", 
                    "D. 0.025 M"
                ]
            },
            {
                question: "Q4 (2021): The electronic configuration of an element is 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p². The element belongs to which block?",
                answer: "A.",
                options: [
                    "A. p-block", 
                    "B. d-block", 
                    "C. s-block", 
                    "D. f-block"
                ]
            },
            {
                question: "Q5 (2020): Which of the following compounds is not aromatic?",
                answer: "B.",
                options: [
                    "A. Benzene", 
                    "B. Cyclooctatetraene", 
                    "C. Pyridine", 
                    "D. Toluene"
                ]
            },
            {
                question: "Q6 (2022): Which of the following compounds will show a positive test for Tollens' reagent?",
                answer: "C.",
                options: [
                    "A. Glucose", 
                    "B. Fructose", 
                    "C. Acetaldehyde", 
                    "D. Propan-2-ol"
                ]
            },
            {
                question: "Q7 (2021): The first ionization enthalpy of a given metal is 500 kJ/mol and the second ionization enthalpy is 1500 kJ/mol. What is the value of the enthalpy change for the reaction, M → M²⁺ + 2e⁻?",
                answer: "D.",
                options: [
                    "A. 500 kJ/mol", 
                    "B. 1000 kJ/mol", 
                    "C. 1500 kJ/mol", 
                    "D. 2000 kJ/mol"
                ]
            },
            {
                question: "Q8 (2022): In the reaction, 2KClO₃ → 2KCl + 3O₂, the oxidation number of chlorine in KClO₃ is:",
                answer: "C.",
                options: [
                    "A. +3", 
                    "B. +1", 
                    "C. +5", 
                    "D. -1"
                ]
            },
            {
                question: "Q9 (2021): A substance that can act as both an acid and a base is called:",
                answer: "A.",
                options: [
                    "A. Amphoteric", 
                    "B. Acidic", 
                    "C. Basic", 
                    "D. Neutral"
                ]
            },
            {
                question: "Q10 (2020): Which of the following reactions will proceed with a negative Gibbs free energy change?",
                answer: "B.",
                options: [
                    "A. Reversible reaction with K < 1", 
                    "B. Irreversible reaction with K > 1", 
                    "C. Equilibrium reaction with K = 1", 
                    "D. Reversible reaction with K = 1"
                ]
            }
        ],
        2: [
            {
                question: "Q1 (2022): The molar enthalpy of vaporization of a liquid at its boiling point is 30 kJ/mol. If the boiling point of the liquid is 100°C, the vapor pressure at 120°C is approximately:",
                answer: "C.",
                options: [
                    "A. 1.0 × 10² Pa", 
                    "B. 2.0 × 10² Pa", 
                    "C. 3.0 × 10² Pa", 
                    "D. 4.0 × 10² Pa"
                ]
            },
            {
                question: "Q2 (2021): The reaction between nitrogen dioxide and fluorine at 25°C is: 2NO₂(g) + F₂(g) → 2NO₂F(g). The rate law for this reaction is determined to be rate = k[NO₂][F₂]. If the concentration of F₂ is doubled, the rate of reaction will:",
                answer: "B.",
                options: [
                    "A. Remain the same", 
                    "B. Double", 
                    "C. Increase fourfold", 
                    "D. Increase eightfold"
                ]
            },
            {
                question: "Q3 (2020): The boiling point of a solution prepared by dissolving 1 mol of a non-volatile solute in 100 mol of water is 100.52°C. The molal elevation constant for water is:",
                answer: "D.",
                options: [
                    "A. 1.0 K·kg/mol", 
                    "B. 0.52 K·kg/mol", 
                    "C. 0.5 K·kg/mol", 
                    "D. 0.52 K·kg/mol"
                ]
            },
            {
                question: "Q4 (2021): Which of the following compounds is an example of a chiral molecule?",
                answer: "A.",
                options: [
                    "A. 2-bromobutane", 
                    "B. Butan-2-one", 
                    "C. 1,2-dibromopropane", 
                    "D. Cyclohexane"
                ]
            },
            {
                question: "Q5 (2022): The electronic configuration of a transition metal ion is [Ar] 3d⁸. The number of unpaired electrons in this ion is:",
                answer: "B.",
                options: [
                    "A. 0", 
                    "B. 2", 
                    "C. 4", 
                    "D. 6"
                ]
            },
            {
                question: "Q6 (2020): Which of the following is the correct order of atomic radii for the elements: Li, Be, Na, Mg?",
                answer: "A.",
                options: [
                    "A. Li > Na > Be > Mg", 
                    "B. Na > Li > Mg > Be", 
                    "C. Li > Be > Na > Mg", 
                    "D. Na > Li > Be > Mg"
                ]
            },
            {
                question: "Q7 (2021): The isomerism shown by butane is:",
                answer: "C.",
                options: [
                    "A. Optical isomerism", 
                    "B. Geometrical isomerism", 
                    "C. Structural isomerism", 
                    "D. Tautomeric isomerism"
                ]
            },
            {
                question: "Q8 (2022): The bond order of O₂⁻ is:",
                answer: "D.",
                options: [
                    "A. 1", 
                    "B. 1.5", 
                    "C. 2", 
                    "D. 2.5"
                ]
            },
            {
                question: "Q9 (2020): In the reaction, Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O, the change in oxidation state of chromium is:",
                answer: "C.",
                options: [
                    "A. +2", 
                    "B. +3", 
                    "C. +6", 
                    "D. +7"
                ]
            },
            {
                question: "Q10 (2021): Which of the following solutions has the highest pH?",
                answer: "A.",
                options: [
                    "A. 0.1 M NaOH", 
                    "B. 0.1 M NaCl", 
                    "C. 0.1 M HCl", 
                    "D. 0.1 M Na₂SO₄"
                ]
            }
        ],
        3: [
            {
                question: "Q1 (2021): In a first-order reaction, the half-life is 20 minutes. If the initial concentration of the reactant is 0.4 mol/L, what is the concentration after 40 minutes?",
                answer: "C.",
                options: [
                    "A. 0.2 mol/L", 
                    "B. 0.1 mol/L", 
                    "C. 0.05 mol/L", 
                    "D. 0.025 mol/L"
                ]
            },
            {
                question: "Q2 (2022): For the reaction 2A → B, the rate law is rate = k[A]². If the initial concentration of A is 0.5 mol/L, and after 10 minutes, the concentration decreases to 0.2 mol/L. The rate constant k is:",
                answer: "B.",
                options: [
                    "A. 1.25 L/mol·min", 
                    "B. 0.6 L/mol·min", 
                    "C. 0.2 L/mol·min", 
                    "D. 0.5 L/mol·min"
                ]
            },
            {
                question: "Q3 (2021): The enthalpy of vaporization of a liquid is 40 kJ/mol. The vapor pressure of the liquid at 25°C is 30 mmHg. What is the vapor pressure at 35°C (use the Clausius-Clapeyron equation)?",
                answer: "D.",
                options: [
                    "A. 35 mmHg", 
                    "B. 40 mmHg", 
                    "C. 45 mmHg", 
                    "D. 55 mmHg"
                ]
            },
            {
                question: "Q4 (2020): In the reaction, 2Na + 2H₂O → 2NaOH + H₂, the oxidation number of sodium changes from:",
                answer: "A.",
                options: [
                    "A. 0 to +1", 
                    "B. +1 to 0", 
                    "C. 0 to -1", 
                    "D. -1 to 0"
                ]
            },
            {
                question: "Q5 (2022): In which of the following reactions, the oxygen atom is reduced?",
                answer: "B.",
                options: [
                    "A. 2Na + O₂ → 2Na₂O", 
                    "B. 2Cu + O₂ → 2CuO", 
                    "C. 2Mg + O₂ → 2MgO", 
                    "D. 2Fe + O₂ → 2FeO"
                ]
            },
            {
                question: "Q6 (2021): In which of the following compounds, the central atom has an oxidation state of +5?",
                answer: "C.",
                options: [
                    "A. NO₂", 
                    "B. SO₂", 
                    "C. VO₃⁻", 
                    "D. Cl₂O₇"
                ]
            },
            {
                question: "Q7 (2020): The solubility product of a salt AB₂ is 1 × 10⁻¹² at 25°C. If the concentration of A is 0.1 M, what is the concentration of B²⁻?",
                answer: "A.",
                options: [
                    "A. 3.16 × 10⁻⁶ M", 
                    "B. 1.0 × 10⁻⁶ M", 
                    "C. 3.16 × 10⁻³ M", 
                    "D. 1.0 × 10⁻³ M"
                ]
            },
            {
                question: "Q8 (2022): Which of the following compounds exhibits optical isomerism?",
                answer: "D.",
                options: [
                    "A. 2-bromobutane", 
                    "B. 2,3-dibromopropane", 
                    "C. Butan-2-one", 
                    "D. Tartaric acid"
                ]
            },
            {
                question: "Q9 (2021): Which of the following ions has the highest charge density?",
                answer: "C.",
                options: [
                    "A. Na⁺", 
                    "B. Mg²⁺", 
                    "C. Al³⁺", 
                    "D. Ca²⁺"
                ]
            },
            {
                question: "Q10 (2022): The transition metal ion with the electronic configuration [Ar] 3d⁸ 4s² is:",
                answer: "B.",
                options: [
                    "A. Cu²⁺", 
                    "B. Ni²⁺", 
                    "C. Co²⁺", 
                    "D. Fe²⁺"
                ]
            }
        ],
        4: [
            {
                question: "Q1 (2021): In a reaction, A + 2B → C, the rate law is rate = k[A][B]². If the concentration of A is doubled and the concentration of B is halved, how does the rate of reaction change?",
                answer: "C.",
                options: [
                    "A. The rate remains unchanged", 
                    "B. The rate is halved", 
                    "C. The rate is doubled", 
                    "D. The rate is quadrupled"
                ]
            },
            {
                question: "Q2 (2020): The standard electrode potential of Zn²⁺/Zn is -0.76 V and that of Cu²⁺/Cu is +0.34 V. What is the standard cell potential for the reaction Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)?",
                answer: "B.",
                options: [
                    "A. -1.10 V", 
                    "B. +1.10 V", 
                    "C. +0.42 V", 
                    "D. -0.42 V"
                ]
            },
            {
                question: "Q3 (2022): The molar solubility of a salt MX₂ is 1 × 10⁻³ M. If the solubility product of MX₂ is 1 × 10⁻⁹, what is the concentration of M²⁺ in the solution?",
                answer: "D.",
                options: [
                    "A. 1 × 10⁻⁶ M", 
                    "B. 2 × 10⁻⁶ M", 
                    "C. 3 × 10⁻⁶ M", 
                    "D. 1 × 10⁻³ M"
                ]
            },
            {
                question: "Q4 (2021): The IUPAC name of the complex [Ni(CO)₄] is:",
                answer: "A.",
                options: [
                    "A. Nickel tetracarbonyl", 
                    "B. Nickel carbonyl tetrahydrate", 
                    "C. Nickel(II) tetrahydride", 
                    "D. Nickel(0) tetrahydride"
                ]
            },
            {
                question: "Q5 (2020): In the reaction H₂ + Cl₂ → 2HCl, the reaction mechanism follows a chain process. The number of steps in the chain process is:",
                answer: "C.",
                options: [
                    "A. One", 
                    "B. Two", 
                    "C. Three", 
                    "D. Four"
                ]
            },
            {
                question: "Q6 (2021): Which of the following compounds is a Lewis acid?",
                answer: "B.",
                options: [
                    "A. NH₃", 
                    "B. AlCl₃", 
                    "C. H₂O", 
                    "D. CH₄"
                ]
            },
            {
                question: "Q7 (2020): The oxidation number of phosphorus in P₄O₁₀ is:",
                answer: "C.",
                options: [
                    "A. +3", 
                    "B. +5", 
                    "C. +4", 
                    "D. +6"
                ]
            },
            {
                question: "Q8 (2021): Which of the following is not a property of transition metals?",
                answer: "D.",
                options: [
                    "A. Formation of colored compounds", 
                    "B. High melting and boiling points", 
                    "C. Variable oxidation states", 
                    "D. No magnetic properties"
                ]
            },
            {
                question: "Q9 (2020): The dissociation constant for acetic acid (CH₃COOH) is 1.8 × 10⁻⁵. What is the pH of a 0.1 M acetic acid solution?",
                answer: "A.",
                options: [
                    "A. 2.87", 
                    "B. 3.12", 
                    "C. 4.76", 
                    "D. 5.02"
                ]
            },
            {
                question: "Q10 (2022): The correct order of stability of the following complex ions is: [Fe(H₂O)₆]²⁺, [Fe(H₂O)₆]³⁺, [Cu(H₂O)₆]²⁺, [Cu(H₂O)₆]³⁺.",
                answer: "D.",
                options: [
                    "A. [Cu(H₂O)₆]²⁺ > [Cu(H₂O)₆]³⁺ > [Fe(H₂O)₆]²⁺ > [Fe(H₂O)₆]³⁺", 
                    "B. [Cu(H₂O)₆]²⁺ > [Fe(H₂O)₆]²⁺ > [Fe(H₂O)₆]³⁺ > [Cu(H₂O)₆]³⁺", 
                    "C. [Fe(H₂O)₆]²⁺ > [Cu(H₂O)₆]²⁺ > [Fe(H₂O)₆]³⁺ > [Cu(H₂O)₆]³⁺", 
                    "D. [Fe(H₂O)₆]²⁺ > [Fe(H₂O)₆]³⁺ > [Cu(H₂O)₆]²⁺ > [Cu(H₂O)₆]³⁺"
                ]
            }
        ],
        5: [
            {
                question: "Q1 (2022): The rate constant of a reaction is 2.5 × 10⁻³ L/mol·s. If the concentration of the reactant is 0.1 M, what is the rate of the reaction for a second-order reaction?",
                answer: "A.",
                options: [
                    "A. 2.5 × 10⁻³ M/s", 
                    "B. 2.5 × 10⁻⁴ M/s", 
                    "C. 2.5 × 10⁻² M/s", 
                    "D. 2.5 × 10⁻⁵ M/s"
                ]
            },
            {
                question: "Q2 (2021): The enthalpy change for the reaction N₂(g) + 3H₂(g) → 2NH₃(g) is -92.4 kJ. If 1 mol of nitrogen reacts with hydrogen, the work done by the system is (Assume the reaction occurs at constant pressure and temperature):",
                answer: "C.",
                options: [
                    "A. -92.4 kJ", 
                    "B. -185 kJ", 
                    "C. -23.1 kJ", 
                    "D. -46.2 kJ"
                ]
            },
            {
                question: "Q3 (2020): For the reaction, A + 2B → C, the rate law is rate = k[A][B]². If the initial concentration of A is 0.5 M and B is 0.1 M, what is the rate of the reaction?",
                answer: "B.",
                options: [
                    "A. 0.01 M/s", 
                    "B. 0.05 M/s", 
                    "C. 0.1 M/s", 
                    "D. 0.02 M/s"
                ]
            },
            {
                question: "Q4 (2021): Which of the following is an example of a Lewis base?",
                answer: "D.",
                options: [
                    "A. BF₃", 
                    "B. AlCl₃", 
                    "C. H₂O", 
                    "D. NH₃"
                ]
            },
            {
                question: "Q5 (2020): The magnetic behavior of a substance depends on its:",
                answer: "C.",
                options: [
                    "A. Atomic radius", 
                    "B. Ionization energy", 
                    "C. Electron configuration", 
                    "D. Oxidation state"
                ]
            },
            {
                question: "Q6 (2022): The enthalpy of formation of NaCl(s) is -411 kJ/mol. What is the lattice energy of NaCl(s) if the enthalpy of sublimation of Na is 108 kJ/mol and the ionization enthalpy of Na is 496 kJ/mol?",
                answer: "A.",
                options: [
                    "A. 786 kJ/mol", 
                    "B. 580 kJ/mol", 
                    "C. 740 kJ/mol", 
                    "D. 900 kJ/mol"
                ]
            },
            {
                question: "Q7 (2021): Which of the following compounds will exhibit the strongest hydrogen bonding?",
                answer: "D.",
                options: [
                    "A. H₂O", 
                    "B. HF", 
                    "C. HCl", 
                    "D. NH₃"
                ]
            },
            {
                question: "Q8 (2020): The solubility product of a sparingly soluble salt AB₂ is 4 × 10⁻⁶. The molar solubility of AB₂ is:",
                answer: "B.",
                options: [
                    "A. 2 × 10⁻³ M", 
                    "B. 2 × 10⁻⁴ M", 
                    "C. 4 × 10⁻⁵ M", 
                    "D. 4 × 10⁻⁶ M"
                ]
            },
            {
                question: "Q9 (2022): In the reaction 2Na + 2H₂O → 2NaOH + H₂, the reaction is:",
                answer: "C.",
                options: [
                    "A. Exothermic", 
                    "B. Endothermic", 
                    "C. Both exothermic and redox", 
                    "D. Only oxidation"
                ]
            },
            {
                question: "Q10 (2021): The complex [Cr(NH₃)₆]³⁺ is:",
                answer: "D.",
                options: [
                    "A. Tetrahedral", 
                    "B. Square planar", 
                    "C. Octahedral", 
                    "D. None of the above"
                ]
            }
        ],
        6: [
            {
                question: "Q1 (2022): The rate constant for a first-order reaction is 0.01 s⁻¹. If the concentration of the reactant is initially 0.5 M, how much time will it take for the concentration to decrease to 0.125 M?",
                answer: "C.",
                options: [
                    "A. 100 s", 
                    "B. 150 s", 
                    "C. 200 s", 
                    "D. 250 s"
                ]
            },
            {
                question: "Q2 (2021): Which of the following is the correct order of basicity for the compounds CH₃NH₂, NH₃, and C₆H₅NH₂?",
                answer: "A.",
                options: [
                    "A. CH₃NH₂ > NH₃ > C₆H₅NH₂", 
                    "B. C₆H₅NH₂ > NH₃ > CH₃NH₂", 
                    "C. NH₃ > CH₃NH₂ > C₆H₅NH₂", 
                    "D. C₆H₅NH₂ > CH₃NH₂ > NH₃"
                ]
            },
            {
                question: "Q3 (2022): The enthalpy of formation of CO₂(g) is -393.5 kJ/mol, and the enthalpy of formation of H₂O(g) is -241.8 kJ/mol. The enthalpy change for the combustion of CH₄(g) is:",
                answer: "B.",
                options: [
                    "A. -890.3 kJ/mol", 
                    "B. -890.0 kJ/mol", 
                    "C. -896.3 kJ/mol", 
                    "D. -899.4 kJ/mol"
                ]
            },
            {
                question: "Q4 (2021): The boiling point of water is 100°C at 1 atm. If the external pressure is reduced to 0.5 atm, the boiling point of water will:",
                answer: "D.",
                options: [
                    "A. Increase", 
                    "B. Decrease", 
                    "C. Remain constant", 
                    "D. Decrease"
                ]
            },
            {
                question: "Q5 (2020): Which of the following will undergo the fastest nucleophilic substitution reaction in the SN1 mechanism?",
                answer: "C.",
                options: [
                    "A. (CH₃)₃CBr", 
                    "B. CH₃CH₂Br", 
                    "C. C₆H₅CH₂Br", 
                    "D. (C₂H₅)₂CHBr"
                ]
            },
            {
                question: "Q6 (2021): Which of the following is the correct order of decreasing ionic radii for the given ions: Na⁺, Mg²⁺, Al³⁺, Si⁴⁺?",
                answer: "A.",
                options: [
                    "A. Na⁺ > Mg²⁺ > Al³⁺ > Si⁴⁺", 
                    "B. Na⁺ > Al³⁺ > Mg²⁺ > Si⁴⁺", 
                    "C. Mg²⁺ > Na⁺ > Al³⁺ > Si⁴⁺", 
                    "D. Al³⁺ > Mg²⁺ > Na⁺ > Si⁴⁺"
                ]
            },
            {
                question: "Q7 (2020): The hybridization of the central atom in XeF₄ is:",
                answer: "B.",
                options: [
                    "A. sp", 
                    "B. sp³d²", 
                    "C. sp³", 
                    "D. sp²"
                ]
            },
            {
                question: "Q8 (2022): The molar solubility of a salt MX is 0.01 mol/L. What is the solubility product (Ksp) of the salt?",
                answer: "C.",
                options: [
                    "A. 1 × 10⁻⁴", 
                    "B. 1 × 10⁻⁶", 
                    "C. 1 × 10⁻⁸", 
                    "D. 1 × 10⁻¹⁰"
                ]
            },
            {
                question: "Q9 (2021): The correct order of increasing bond strength for the following compounds is: H₂, HCl, HF, HBr.",
                answer: "A.",
                options: [
                    "A. HCl < HBr < HF < H₂", 
                    "B. H₂ < HCl < HBr < HF", 
                    "C. HF < HCl < HBr < H₂", 
                    "D. HBr < HCl < HF < H₂"
                ]
            },
            {
                question: "Q10 (2022): The correct IUPAC name for the compound [Cr(CO)₆] is:",
                answer: "D.",
                options: [
                    "A. Hexacarbonylchromium", 
                    "B. Chromium hexacarbonyl", 
                    "C. Chromium(0) hexacarbonyl", 
                    "D. Chromium(III) hexacarbonyl"
                ]
            }
        ],
        7: [
            {
                question: "Q1 (2021): The rate constant for a reaction is 3.0 × 10⁻⁴ s⁻¹. If the concentration of the reactant is 0.2 M, what will be the concentration after 100 seconds for a first-order reaction?",
                answer: "D.",
                options: [
                    "A. 0.1 M", 
                    "B. 0.05 M", 
                    "C. 0.15 M", 
                    "D. 0.18 M"
                ]
            },
            {
                question: "Q2 (2020): Which of the following has the highest ionization enthalpy?",
                answer: "B.",
                options: [
                    "A. Na", 
                    "B. Cl", 
                    "C. Al", 
                    "D. O"
                ]
            },
            {
                question: "Q3 (2022): The enthalpy of formation of NaCl(s) is -411 kJ/mol. The enthalpy of sublimation of Na is 108 kJ/mol. The ionization enthalpy of Na is 496 kJ/mol. The electron affinity of Cl is -349 kJ/mol. The lattice energy of NaCl is:",
                answer: "C.",
                options: [
                    "A. 790 kJ/mol", 
                    "B. 900 kJ/mol", 
                    "C. 786 kJ/mol", 
                    "D. 850 kJ/mol"
                ]
            },
            {
                question: "Q4 (2021): The molecular formula of a compound is C₆H₁₂O₆. The compound is a type of sugar. It is:",
                answer: "A.",
                options: [
                    "A. Glucose", 
                    "B. Fructose", 
                    "C. Galactose", 
                    "D. Sucrose"
                ]
            },
            {
                question: "Q5 (2020): Which of the following will show optical activity?",
                answer: "D.",
                options: [
                    "A. 2,3-Dimethylbutane", 
                    "B. 2-Bromobutane", 
                    "C. 3-Chloropropene", 
                    "D. Lactic acid"
                ]
            },
            {
                question: "Q6 (2022): The boiling point of a solution prepared by dissolving 1 mole of NaCl in 1 liter of water is 100.52°C. The molal boiling point elevation constant of water is 0.52°C kg/mol. The van't Hoff factor (i) for NaCl is:",
                answer: "B.",
                options: [
                    "A. 2", 
                    "B. 1.8", 
                    "C. 3", 
                    "D. 2.5"
                ]
            },
            {
                question: "Q7 (2021): Which of the following complexes will show paramagnetism?",
                answer: "C.",
                options: [
                    "A. [Ni(CO)₄]", 
                    "B. [Cu(NH₃)₄]²⁺", 
                    "C. [Fe(H₂O)₆]²⁺", 
                    "D. [Zn(CO)₄]²⁻"
                ]
            },
            {
                question: "Q8 (2020): Which of the following is the most acidic?",
                answer: "D.",
                options: [
                    "A. H₃PO₄", 
                    "B. CH₃COOH", 
                    "C. HNO₃", 
                    "D. HCl"
                ]
            },
            {
                question: "Q9 (2022): The rate law for the reaction A + B → C is given by rate = k[A]²[B]. If the initial concentration of A is 0.1 M and B is 0.2 M, what is the rate of the reaction if k = 2 × 10⁻² L²/mol²·s?",
                answer: "A.",
                options: [
                    "A. 4 × 10⁻³ M/s", 
                    "B. 4 × 10⁻⁴ M/s", 
                    "C. 4 × 10⁻² M/s", 
                    "D. 8 × 10⁻³ M/s"
                ]
            },
            {
                question: "Q10 (2021): In the reaction 2SO₂(g) + O₂(g) → 2SO₃(g), the rate law is given by rate = k[SO₂]²[O₂]. What is the overall order of the reaction?",
                answer: "C.",
                options: [
                    "A. 1", 
                    "B. 2", 
                    "C. 3", 
                    "D. 4"
                ]
            }
        ],
        8: [
            {
                question: "Q1 (2022): The activation energy for a reaction is 75 kJ/mol. The rate constant at 300 K is 1.5 × 10⁻⁴ s⁻¹. What is the rate constant at 350 K? (Assume the Arrhenius equation is valid)",
                answer: "C.",
                options: [
                    "A. 3.5 × 10⁻⁴ s⁻¹", 
                    "B. 4.0 × 10⁻⁴ s⁻¹", 
                    "C. 7.5 × 10⁻⁴ s⁻¹", 
                    "D. 6.0 × 10⁻⁴ s⁻¹"
                ]
            },
            {
                question: "Q2 (2021): In the reaction 2A → B, if the rate law is rate = k[A]², what will be the effect on the rate of reaction if the concentration of A is doubled?",
                answer: "D.",
                options: [
                    "A. Rate will increase by a factor of 2", 
                    "B. Rate will increase by a factor of 4", 
                    "C. Rate will remain unchanged", 
                    "D. Rate will increase by a factor of 8"
                ]
            },
            {
                question: "Q3 (2022): The pH of a solution is 3. What is the concentration of H⁺ ions in the solution?",
                answer: "A.",
                options: [
                    "A. 1 × 10⁻³ M", 
                    "B. 1 × 10⁻⁴ M", 
                    "C. 1 × 10⁻⁵ M", 
                    "D. 1 × 10⁻² M"
                ]
            },
            {
                question: "Q4 (2020): Which of the following is a correct statement about the behavior of ideal gases?",
                answer: "C.",
                options: [
                    "A. At low temperature and high pressure, real gases behave like ideal gases.", 
                    "B. Ideal gases have a fixed volume at all temperatures.", 
                    "C. Ideal gases follow Boyle’s Law and Charles’s Law exactly.", 
                    "D. Ideal gases do not exist in nature."
                ]
            },
            {
                question: "Q5 (2021): Which of the following compounds will undergo nucleophilic substitution with the fastest rate in an SN2 reaction?",
                answer: "B.",
                options: [
                    "A. (CH₃)₃CBr", 
                    "B. CH₃Cl", 
                    "C. CH₃CH₂Cl", 
                    "D. C₆H₅CH₂Br"
                ]
            },
            {
                question: "Q6 (2020): What is the hybridization of the central atom in XeO₄?",
                answer: "A.",
                options: [
                    "A. sp³d²", 
                    "B. sp³", 
                    "C. sp²", 
                    "D. sp"
                ]
            },
            {
                question: "Q7 (2022): The boiling point of an aqueous solution containing 2 moles of NaCl in 1 liter of water is 101.2°C. The molal boiling point elevation constant (Kb) of water is 0.52°C·kg/mol. What is the molar mass of NaCl?",
                answer: "D.",
                options: [
                    "A. 50 g/mol", 
                    "B. 58 g/mol", 
                    "C. 60 g/mol", 
                    "D. 58.5 g/mol"
                ]
            },
            {
                question: "Q8 (2022): The correct order of ionization energies for the following elements is: Mg, Na, Al, Si.",
                answer: "A.",
                options: [
                    "A. Na < Mg < Al < Si", 
                    "B. Si < Al < Mg < Na", 
                    "C. Mg < Na < Al < Si", 
                    "D. Si < Mg < Na < Al"
                ]
            },
            {
                question: "Q9 (2021): Which of the following statements is true for the coordination compound [Ni(CO)₄]?",
                answer: "C.",
                options: [
                    "A. It exhibits paramagnetism.", 
                    "B. It is tetrahedral in geometry.", 
                    "C. It exhibits zero dipole moment.", 
                    "D. It is square planar in geometry."
                ]
            },
            {
                question: "Q10 (2022): Which of the following compounds exhibits chirality?",
                answer: "B.",
                options: [
                    "A. 2-Bromopropane", 
                    "B. 2-Chlorobutane", 
                    "C. 1,2-Dichloroethene", 
                    "D. 2,3-Dimethylbutane"
                ]
            }
        ],
        9: [
            {
                question: "Q1 (2022): The enthalpy of formation of CO₂(g) is -393.5 kJ/mol and the bond dissociation enthalpy of Cl₂ is 243 kJ/mol. The enthalpy change for the reaction 2Cl₂(g) + C(s) → CCl₄(l) is:",
                answer: "C.",
                options: [
                    "A. -1100 kJ/mol", 
                    "B. -950 kJ/mol", 
                    "C. -750 kJ/mol", 
                    "D. -600 kJ/mol"
                ]
            },
            {
                question: "Q2 (2021): The rate of reaction A + B → C is given by rate = k[A]²[B]. If the concentration of A is tripled and the concentration of B is doubled, what will be the effect on the rate of the reaction?",
                answer: "D.",
                options: [
                    "A. Rate increases by a factor of 5", 
                    "B. Rate increases by a factor of 6", 
                    "C. Rate increases by a factor of 12", 
                    "D. Rate increases by a factor of 18"
                ]
            },
            {
                question: "Q3 (2022): The hybridization of the central atom in IF₅ is:",
                answer: "B.",
                options: [
                    "A. sp²", 
                    "B. sp³d²", 
                    "C. sp³d", 
                    "D. sp"
                ]
            },
            {
                question: "Q4 (2020): The molar volume of a gas at STP is 22.4 L. If the gas is at a temperature of 300 K and pressure 2 atm, what is the volume of 1 mole of the gas?",
                answer: "C.",
                options: [
                    "A. 10.5 L", 
                    "B. 20.5 L", 
                    "C. 11.2 L", 
                    "D. 12.5 L"
                ]
            },
            {
                question: "Q5 (2021): Which of the following is the correct order of basicity for the given compounds: NH₃, CH₃NH₂, (CH₃)₂NH, (C₆H₅)₃N?",
                answer: "A.",
                options: [
                    "A. (CH₃)₂NH > CH₃NH₂ > NH₃ > (C₆H₅)₃N", 
                    "B. (C₆H₅)₃N > NH₃ > CH₃NH₂ > (CH₃)₂NH", 
                    "C. CH₃NH₂ > (CH₃)₂NH > NH₃ > (C₆H₅)₃N", 
                    "D. (C₆H₅)₃N > (CH₃)₂NH > NH₃ > CH₃NH₂"
                ]
            },
            {
                question: "Q6 (2022): The pKa of a weak acid is 4. What is the pH of a 0.1 M solution of the acid at 25°C?",
                answer: "C.",
                options: [
                    "A. 4", 
                    "B. 6", 
                    "C. 5", 
                    "D. 3"
                ]
            },
            {
                question: "Q7 (2020): In the reaction 3A → B, if the rate law is rate = k[A]³, the rate constant (k) is 2 × 10⁻³ s⁻¹. What is the rate of reaction when the concentration of A is 0.2 M?",
                answer: "B.",
                options: [
                    "A. 1.6 × 10⁻³ M/s", 
                    "B. 2.56 × 10⁻³ M/s", 
                    "C. 3.2 × 10⁻³ M/s", 
                    "D. 1.28 × 10⁻³ M/s"
                ]
            },
            {
                question: "Q8 (2022): The correct order of increasing electronegativity of the following elements is: N, F, O, Cl.",
                answer: "D.",
                options: [
                    "A. F < O < N < Cl", 
                    "B. N < F < O < Cl", 
                    "C. O < N < F < Cl", 
                    "D. N < O < Cl < F"
                ]
            },
            {
                question: "Q9 (2021): The magnetic moment of the complex [Mn(H₂O)₆]²⁺ is 5.9 BM. The d-electron configuration of Mn²⁺ is:",
                answer: "A.",
                options: [
                    "A. d⁵", 
                    "B. d⁴", 
                    "C. d³", 
                    "D. d²"
                ]
            },
            {
                question: "Q10 (2021): The reduction potential of the following half-reaction is 0.76 V. What is the standard electrode potential for the reaction Cu²⁺(aq) + 2e⁻ → Cu(s)?",
                answer: "C.",
                options: [
                    "A. +0.34 V", 
                    "B. +0.66 V", 
                    "C. +0.76 V", 
                    "D. +0.23 V"
                ]
            }
        ],
        10: [
            {
                question: "Q1 (2022): The reaction 2NO + O₂ → 2NO₂ is first-order with respect to both NO and O₂. The rate constant for this reaction at 300 K is 4 × 10⁻⁴ L·mol⁻¹·s⁻¹. If the concentration of NO is increased by a factor of 3 and the concentration of O₂ is increased by a factor of 2, what will be the new rate of reaction?",
                answer: "D.",
                options: [
                    "A. 4 × 10⁻³ L·mol⁻¹·s⁻¹", 
                    "B. 3 × 10⁻³ L·mol⁻¹·s⁻¹", 
                    "C. 24 × 10⁻⁴ L·mol⁻¹·s⁻¹", 
                    "D. 36 × 10⁻⁴ L·mol⁻¹·s⁻¹"
                ]
            },
            {
                question: "Q2 (2021): The critical temperature of a gas is 85°C. If the gas is cooled to 30°C, what will be the percentage change in its volume at constant pressure according to the ideal gas law?",
                answer: "B.",
                options: [
                    "A. 35%", 
                    "B. 20%", 
                    "C. 50%", 
                    "D. 60%"
                ]
            },
            {
                question: "Q3 (2022): The standard reduction potential of Mn²⁺/Mn is -1.18 V and for Zn²⁺/Zn is -0.76 V. What is the standard electrode potential for the reaction: Mn²⁺ + Zn → Mn + Zn²⁺?",
                answer: "C.",
                options: [
                    "A. -1.94 V", 
                    "B. +0.42 V", 
                    "C. +0.42 V", 
                    "D. -0.42 V"
                ]
            },
            {
                question: "Q4 (2021): The bond dissociation enthalpy of H₂ is 435 kJ/mol. The bond enthalpy of Cl₂ is 243 kJ/mol. What is the enthalpy change for the reaction 2HCl → H₂ + Cl₂?",
                answer: "A.",
                options: [
                    "A. 347 kJ/mol", 
                    "B. -347 kJ/mol", 
                    "C. 435 kJ/mol", 
                    "D. -243 kJ/mol"
                ]
            },
            {
                question: "Q5 (2022): The magnetic moment of the complex [Cr(H₂O)₆]³⁺ is 4.9 BM. What is the number of unpaired electrons in the complex?",
                answer: "C.",
                options: [
                    "A. 3", 
                    "B. 5", 
                    "C. 3", 
                    "D. 2"
                ]
            },
            {
                question: "Q6 (2021): The half-life of a first-order reaction is 20 minutes. How long will it take for the concentration of the reactant to decrease by 75%?",
                answer: "D.",
                options: [
                    "A. 30 minutes", 
                    "B. 40 minutes", 
                    "C. 60 minutes", 
                    "D. 60 minutes"
                ]
            },
            {
                question: "Q7 (2020): For a reaction involving gaseous reactants, the rate law is found to be rate = k[P]²[Q]³. If the concentration of P is doubled and the concentration of Q is tripled, by what factor will the rate change?",
                answer: "A.",
                options: [
                    "A. 72", 
                    "B. 36", 
                    "C. 48", 
                    "D. 64"
                ]
            },
            {
                question: "Q8 (2022): The standard enthalpy change for the formation of CO₂ from carbon and oxygen is -393.5 kJ/mol. The standard enthalpy change for the formation of water from hydrogen and oxygen is -241.8 kJ/mol. What is the standard enthalpy change for the combustion of methane (CH₄)?",
                answer: "B.",
                options: [
                    "A. -890.6 kJ/mol", 
                    "B. -802.6 kJ/mol", 
                    "C. -722.6 kJ/mol", 
                    "D. -540.6 kJ/mol"
                ]
            },
            {
                question: "Q9 (2022): The coordination compound [Co(NH₃)₆]³⁺ has a high-spin octahedral structure. What is the number of unpaired electrons in this complex?",
                answer: "C.",
                options: [
                    "A. 0", 
                    "B. 1", 
                    "C. 3", 
                    "D. 4"
                ]
            },
            {
                question: "Q10 (2021): In a first-order reaction, the time required for the concentration of the reactant to decrease from 0.80 M to 0.20 M is 40 minutes. What is the rate constant for the reaction?",
                answer: "D.",
                options: [
                    "A. 0.0173 min⁻¹", 
                    "B. 0.0215 min⁻¹", 
                    "C. 0.0253 min⁻¹", 
                    "D. 0.0315 min⁻¹"
                ]
            }
        ],                                                                                
    },
    math: {
        1: [
            {
                question: "Q1 (2021): If the roots of the equation x^2 - 4x + 3 = 0 are α and β, then the value of (α^3 + β^3) is:",
                answer: "C.",
                options: [
                    "A. 0", 
                    "B. 8", 
                    "C. 18", 
                    "D. 12"
                ]
            },
            {
                question: "Q2 (2022): The number of real solutions to the equation sin(x) = 2x in the interval [0, π] is:",
                answer: "A.",
                options: [
                    "A. 1", 
                    "B. 2", 
                    "C. 3", 
                    "D. 4"
                ]
            },
            {
                question: "Q3 (2020): If the sum of the roots of the equation x^3 - 6x^2 + 11x - 6 = 0 is α + β + γ, then α^2 + β^2 + γ^2 is:",
                answer: "B.",
                options: [
                    "A. 14", 
                    "B. 14", 
                    "C. 16", 
                    "D. 12"
                ]
            },
            {
                question: "Q4 (2021): If the area of the region enclosed by the curve y = sin(x) between x = 0 and x = π is A, then the area of the region enclosed by the curve y = cos(x) between x = 0 and x = π/2 is:",
                answer: "D.",
                options: [
                    "A. A", 
                    "B. 0", 
                    "C. 2A", 
                    "D. A/2"
                ]
            },
            {
                question: "Q5 (2022): The radius of convergence of the series Σ(x^n / n^2) is:",
                answer: "C.",
                options: [
                    "A. 0", 
                    "B. 1", 
                    "C. ∞", 
                    "D. 2"
                ]
            },
            {
                question: "Q6 (2020): If log2(x + 3) = log4(x - 1), then the value of x is:",
                answer: "A.",
                options: [
                    "A. 5", 
                    "B. 4", 
                    "C. 6", 
                    "D. 3"
                ]
            },
            {
                question: "Q7 (2021): The length of the chord of the curve y = x^2 + 4x that passes through the point (1,5) is:",
                answer: "B.",
                options: [
                    "A. sqrt(5)", 
                    "B. 2sqrt(5)", 
                    "C. sqrt(2)", 
                    "D. 2sqrt(2)"
                ]
            },
            {
                question: "Q8 (2022): The minimum value of the function f(x) = 4x^2 - 12x + 9 is:",
                answer: "D.",
                options: [
                    "A. 0", 
                    "B. 1", 
                    "C. 2", 
                    "D. 3"
                ]
            },
            {
                question: "Q9 (2020): The number of real roots of the equation e^x + x^3 = 3 is:",
                answer: "C.",
                options: [
                    "A. 1", 
                    "B. 2", 
                    "C. 3", 
                    "D. 4"
                ]
            },
            {
                question: "Q10 (2021): If the sum of the first n terms of an arithmetic progression is S_n = 3n^2 + 2n, then the nth term of the sequence is:",
                answer: "B.",
                options: [
                    "A. 3n + 2", 
                    "B. 6n + 2", 
                    "C. 3n + 1", 
                    "D. 2n + 3"
                ]
            }
        ],
        2: [
            {
                question: "Q1 (2021): The number of solutions to the equation \( x^3 + 2x^2 - 5x + 6 = 0 \) is:",
                answer: "B.",
                options: [
                    "A. 1", 
                    "B. 3", 
                    "C. 2", 
                    "D. 0"
                ]
            },
            {
                question: "Q2 (2022): The derivative of \( f(x) = \ln(x^2 + 2x) \) at \( x = 1 \) is:",
                answer: "A.",
                options: [
                    "A. 1/3", 
                    "B. 1/2", 
                    "C. 1/4", 
                    "D. 2"
                ]
            },
            {
                question: "Q3 (2020): The number of solutions to the equation \( \tan(x) = 2x \) in the interval \( [0, \pi/2] \) is:",
                answer: "A.",
                options: [
                    "A. 1", 
                    "B. 2", 
                    "C. 3", 
                    "D. 4"
                ]
            },
            {
                question: "Q4 (2022): If the sum of the first n terms of an arithmetic progression is \( S_n = n^2 + 3n \), then the common difference of the progression is:",
                answer: "C.",
                options: [
                    "A. 4", 
                    "B. 3", 
                    "C. 2", 
                    "D. 1"
                ]
            },
            {
                question: "Q5 (2020): The minimum value of the expression \( 4x^2 - 12x + 5 \) is:",
                answer: "D.",
                options: [
                    "A. 0", 
                    "B. 2", 
                    "C. 1", 
                    "D. 3"
                ]
            },
            {
                question: "Q6 (2021): The value of the integral \( \int_0^1 \frac{dx}{1 + x^2} \) is:",
                answer: "B.",
                options: [
                    "A. \( \pi \)", 
                    "B. \( \frac{\pi}{4} \)", 
                    "C. 1", 
                    "D. 0"
                ]
            },
            {
                question: "Q7 (2020): The number of real roots of the equation \( x^4 - 2x^3 + x^2 = 0 \) is:",
                answer: "C.",
                options: [
                    "A. 1", 
                    "B. 2", 
                    "C. 3", 
                    "D. 4"
                ]
            },
            {
                question: "Q8 (2022): If \( f(x) = \ln(x) + \frac{1}{x} \), then the value of \( f'(x) \) at \( x = 1 \) is:",
                answer: "D.",
                options: [
                    "A. 0", 
                    "B. 1", 
                    "C. -1", 
                    "D. 2"
                ]
            },
            {
                question: "Q9 (2020): The radius of convergence of the series \( \sum_{n=1}^{\infty} \frac{x^n}{n!} \) is:",
                answer: "B.",
                options: [
                    "A. 0", 
                    "B. ∞", 
                    "C. 1", 
                    "D. 2"
                ]
            },
            {
                question: "Q10 (2021): The equation of the normal to the curve \( y = x^3 + 3x^2 - 2x \) at \( x = 1 \) is:",
                answer: "C.",
                options: [
                    "A. y = -3x + 2", 
                    "B. y = 3x - 2", 
                    "C. y = -x + 2", 
                    "D. y = x - 2"
                ]
            }
        ],
        3: [
            {
                question: "Q1 (2021): The value of the integral ∫_0^∞ e^(-x) / (x^2 + 1) dx is:",
                answer: "C.",
                options: [
                    "A. 0", 
                    "B. pi / 2", 
                    "C. pi / 4", 
                    "D. pi"
                ]
            },
            {
                question: "Q2 (2020): The number of solutions to the equation sin(x) = x in the interval [0, 5] is:",
                answer: "B.",
                options: [
                    "A. 1", 
                    "B. 2", 
                    "C. 3", 
                    "D. 4"
                ]
            },
            {
                question: "Q3 (2021): The radius of convergence of the series Σ(x^n / (2n)!) is:",
                answer: "D.",
                options: [
                    "A. 1", 
                    "B. 2", 
                    "C. 3", 
                    "D. ∞"
                ]
            },
            {
                question: "Q4 (2022): The equation of the tangent to the curve y = x^2 + 3x - 4 at the point (1, -1) is:",
                answer: "A.",
                options: [
                    "A. y + 1 = 5(x - 1)", 
                    "B. y + 1 = 2(x - 1)", 
                    "C. y + 1 = 3(x - 1)", 
                    "D. y + 1 = 4(x - 1)"
                ]
            },
            {
                question: "Q5 (2020): The value of the integral ∫_1^2 dx / (x^2 + 2x + 1) is:",
                answer: "B.",
                options: [
                    "A. ln(2)", 
                    "B. 1 / 2", 
                    "C. 1", 
                    "D. ln(3)"
                ]
            },
            {
                question: "Q6 (2021): The number of real solutions of the equation x^3 + x^2 - x - 1 = 0 is:",
                answer: "C.",
                options: [
                    "A. 0", 
                    "B. 1", 
                    "C. 3", 
                    "D. 2"
                ]
            },
            {
                question: "Q7 (2022): The value of the integral ∫_0^∞ dx / (x^2 + 2x + 2) is:",
                answer: "D.",
                options: [
                    "A. pi / 2", 
                    "B. pi", 
                    "C. pi / 4", 
                    "D. pi / 2"
                ]
            },
            {
                question: "Q8 (2020): The sum of the series Σ(1 / n^3) is:",
                answer: "A.",
                options: [
                    "A. pi^2 / 6", 
                    "B. pi^3 / 6", 
                    "C. 1", 
                    "D. 0"
                ]
            },
            {
                question: "Q9 (2021): If f(x) = 1 / x, then the value of f'(x) at x = 1 is:",
                answer: "B.",
                options: [
                    "A. 1", 
                    "B. -1", 
                    "C. 0", 
                    "D. 2"
                ]
            },
            {
                question: "Q10 (2022): The maximum value of the expression cos^2(x) - 2cos(x) + 2 is:",
                answer: "C.",
                options: [
                    "A. 1", 
                    "B. 2", 
                    "C. 3", 
                    "D. 4"
                ]
            }
        ],
        4: [
            {
                question: "Q1 (2020): The number of real roots of the equation x^4 - 4x^3 + 6x^2 - 4x + 1 = 0 is:",
                answer: "A.",
                options: [
                    "A. 4", 
                    "B. 3", 
                    "C. 2", 
                    "D. 1"
                ]
            },
            {
                question: "Q2 (2021): The integral ∫_0^∞ (e^(-x) / (x^2 + 1)) dx is equal to:",
                answer: "C.",
                options: [
                    "A. 0", 
                    "B. pi", 
                    "C. pi / 2", 
                    "D. pi / 4"
                ]
            },
            {
                question: "Q3 (2022): The area of the region bounded by the curves y = x^2 and y = x is:",
                answer: "B.",
                options: [
                    "A. 1", 
                    "B. 1/2", 
                    "C. 2", 
                    "D. 4"
                ]
            },
            {
                question: "Q4 (2020): The value of the double integral ∫∫_R (x^2 + y^2) dA, where R is the region bounded by the circle x^2 + y^2 = 1, is:",
                answer: "D.",
                options: [
                    "A. pi", 
                    "B. 1", 
                    "C. 2", 
                    "D. pi / 2"
                ]
            },
            {
                question: "Q5 (2021): If the equation x^2 - 4x + 3 = 0 has one solution repeated, then the value of the discriminant of the equation is:",
                answer: "A.",
                options: [
                    "A. 0", 
                    "B. 1", 
                    "C. -1", 
                    "D. 4"
                ]
            },
            {
                question: "Q6 (2022): The sum of the series Σ (1 / n^2) from n = 1 to infinity is:",
                answer: "C.",
                options: [
                    "A. pi", 
                    "B. 2", 
                    "C. pi^2 / 6", 
                    "D. 1"
                ]
            },
            {
                question: "Q7 (2021): The number of real solutions to the equation sin(x) = x in the interval [0, 2pi] is:",
                answer: "B.",
                options: [
                    "A. 0", 
                    "B. 1", 
                    "C. 2", 
                    "D. 3"
                ]
            },
            {
                question: "Q8 (2020): The radius of convergence of the series Σ (x^n / n!) is:",
                answer: "D.",
                options: [
                    "A. 0", 
                    "B. 1", 
                    "C. 2", 
                    "D. ∞"
                ]
            },
            {
                question: "Q9 (2022): The number of solutions of the equation log(x) + log(x - 1) = 1 is:",
                answer: "C.",
                options: [
                    "A. 1", 
                    "B. 2", 
                    "C. 3", 
                    "D. 0"
                ]
            },
            {
                question: "Q10 (2021): The derivative of the function f(x) = (x^2 + 1)^2 at x = 1 is:",
                answer: "A.",
                options: [
                    "A. 4", 
                    "B. 2", 
                    "C. 8", 
                    "D. 1"
                ]
            }
        ],
        5: [
            {
                question: "Q1 (2020): The number of distinct real roots of the equation x^3 - 6x^2 + 11x - 6 = 0 is:",
                answer: "A.",
                options: [
                    "A. 3", 
                    "B. 2", 
                    "C. 1", 
                    "D. 0"
                ]
            },
            {
                question: "Q2 (2021): The value of the integral ∫(from 0 to 1) 1 / √(1 - x^2) dx is:",
                answer: "B.",
                options: [
                    "A. 0", 
                    "B. pi / 2", 
                    "C. 1", 
                    "D. pi"
                ]
            },
            {
                question: "Q3 (2022): The limit lim(x -> 0) (e^x - 1) / x is equal to:",
                answer: "C.",
                options: [
                    "A. 0", 
                    "B. 1", 
                    "C. 1", 
                    "D. infinity"
                ]
            },
            {
                question: "Q4 (2020): The equation of the tangent to the curve y = x^3 + 3x^2 - x + 5 at the point (1, 7) is:",
                answer: "A.",
                options: [
                    "A. y - 7 = 5(x - 1)", 
                    "B. y - 7 = 3(x - 1)", 
                    "C. y - 7 = 4(x - 1)", 
                    "D. y - 7 = 6(x - 1)"
                ]
            },
            {
                question: "Q5 (2021): The value of the integral ∫(from 0 to 1) x^2 / (1 + x^2) dx is:",
                answer: "D.",
                options: [
                    "A. 1 / 2", 
                    "B. 1", 
                    "C. 3 / 4", 
                    "D. pi / 4"
                ]
            },
            {
                question: "Q6 (2020): The radius of convergence of the power series ∑(x^n / n^2) is:",
                answer: "D.",
                options: [
                    "A. 1", 
                    "B. 2", 
                    "C. 3", 
                    "D. infinity"
                ]
            },
            {
                question: "Q7 (2022): The value of the sum ∑(from n = 1 to infinity) 1 / n^2 is:",
                answer: "A.",
                options: [
                    "A. pi^2 / 6", 
                    "B. pi^3 / 6", 
                    "C. 1", 
                    "D. 2"
                ]
            },
            {
                question: "Q8 (2021): The number of solutions of the equation sin(x) = x in the interval [0, 5] is:",
                answer: "B.",
                options: [
                    "A. 1", 
                    "B. 2", 
                    "C. 3", 
                    "D. 4"
                ]
            },
            {
                question: "Q9 (2020): The equation of the line normal to the curve y = x^2 - 3x + 2 at the point (2, 0) is:",
                answer: "C.",
                options: [
                    "A. y - 0 = 2(x - 2)", 
                    "B. y - 0 = -2(x - 2)", 
                    "C. y - 0 = -1(x - 2)", 
                    "D. y - 0 = 3(x - 2)"
                ]
            },
            {
                question: "Q10 (2021): The value of ∫(from 0 to infinity) e^(-x) / (x^2 + 1) dx is:",
                answer: "B.",
                options: [
                    "A. 0", 
                    "B. pi / 2", 
                    "C. pi / 4", 
                    "D. pi"
                ]
            }
        ],
        6: [
            {
                question: "Q1 (2020): The value of the integral ∫(from 0 to 1) (x^3 - x^2 + x - 1) dx is:",
                answer: "C.",
                options: [
                    "A. 0", 
                    "B. 1", 
                    "C. -1/4", 
                    "D. 1/4"
                ]
            },
            {
                question: "Q2 (2021): The number of real solutions of the equation x^4 - 6x^2 + 5 = 0 is:",
                answer: "B.",
                options: [
                    "A. 4", 
                    "B. 2", 
                    "C. 1", 
                    "D. 0"
                ]
            },
            {
                question: "Q3 (2022): The sum of the series ∑(from n=1 to infinity) (-1)^(n+1) / n^2 is:",
                answer: "A.",
                options: [
                    "A. pi^2 / 12", 
                    "B. pi^2 / 6", 
                    "C. 1", 
                    "D. 2"
                ]
            },
            {
                question: "Q4 (2020): The value of the integral ∫(from 0 to infinity) e^(-x^2) dx is:",
                answer: "D.",
                options: [
                    "A. 0", 
                    "B. 1", 
                    "C. pi", 
                    "D. √pi"
                ]
            },
            {
                question: "Q5 (2021): The value of the limit lim(x -> 0) (sin(x) / x) is:",
                answer: "A.",
                options: [
                    "A. 1", 
                    "B. 0", 
                    "C. infinity", 
                    "D. undefined"
                ]
            },
            {
                question: "Q6 (2022): The radius of convergence of the series ∑(from n=0 to infinity) x^n / n! is:",
                answer: "C.",
                options: [
                    "A. 0", 
                    "B. 1", 
                    "C. infinity", 
                    "D. 2"
                ]
            },
            {
                question: "Q7 (2021): The number of solutions of the equation tan(x) = x in the interval [0, 2pi] is:",
                answer: "B.",
                options: [
                    "A. 1", 
                    "B. 2", 
                    "C. 3", 
                    "D. 4"
                ]
            },
            {
                question: "Q8 (2020): The sum of the series ∑(from n=1 to infinity) 1 / n^3 is:",
                answer: "C.",
                options: [
                    "A. 1", 
                    "B. 2", 
                    "C. pi^3 / 32", 
                    "D. pi^3 / 6"
                ]
            },
            {
                question: "Q9 (2021): The equation of the normal to the curve y = x^3 + 2x^2 - x at the point (1, 2) is:",
                answer: "A.",
                options: [
                    "A. y - 2 = -5(x - 1)", 
                    "B. y - 2 = 5(x - 1)", 
                    "C. y - 2 = 3(x - 1)", 
                    "D. y - 2 = -3(x - 1)"
                ]
            },
            {
                question: "Q10 (2022): The value of the integral ∫(from 0 to 1) (e^x / (1 + x^2)) dx is:",
                answer: "B.",
                options: [
                    "A. 0", 
                    "B. 1", 
                    "C. pi", 
                    "D. e"
                ]
            }
        ],
        7: [
            {
                question: "Q1 (2020): The number of solutions of the equation x^3 - 6x + 4 = 0 in the real number system is:",
                answer: "B.",
                options: [
                    "A. 0", 
                    "B. 1", 
                    "C. 2", 
                    "D. 3"
                ]
            },
            {
                question: "Q2 (2021): The value of the limit lim(x -> 0) (e^(x^2) - 1) / x^2 is:",
                answer: "A.",
                options: [
                    "A. 1", 
                    "B. 0", 
                    "C. 2", 
                    "D. infinity"
                ]
            },
            {
                question: "Q3 (2020): The radius of convergence of the series sum from n=1 to infinity of x^n / n^2 is:",
                answer: "C.",
                options: [
                    "A. 1", 
                    "B. 2", 
                    "C. infinity", 
                    "D. 0"
                ]
            },
            {
                question: "Q4 (2021): The value of the integral from 0 to infinity of e^(-x) / (1 + x^2) dx is:",
                answer: "B.",
                options: [
                    "A. 0", 
                    "B. pi / 2", 
                    "C. 1", 
                    "D. pi"
                ]
            },
            {
                question: "Q5 (2022): The number of real solutions to the equation cos(x) = x in the interval [0, 2π] is:",
                answer: "A.",
                options: [
                    "A. 1", 
                    "B. 2", 
                    "C. 3", 
                    "D. 4"
                ]
            },
            {
                question: "Q6 (2021): The equation of the tangent to the curve y = x^3 - 6x^2 + 12x - 4 at the point (2, 0) is:",
                answer: "C.",
                options: [
                    "A. y = 3x - 6", 
                    "B. y = -3x + 6", 
                    "C. y = 6x - 12", 
                    "D. y = 2x - 4"
                ]
            },
            {
                question: "Q7 (2020): The sum of the series sum from n=1 to infinity of (-1)^n / n^3 is:",
                answer: "B.",
                options: [
                    "A. 1", 
                    "B. -pi^3 / 32", 
                    "C. 2", 
                    "D. pi^3 / 6"
                ]
            },
            {
                question: "Q8 (2022): The number of real roots of the equation x^4 + 4x^3 + 6x^2 + 4x + 1 = 0 is:",
                answer: "A.",
                options: [
                    "A. 2", 
                    "B. 3", 
                    "C. 1", 
                    "D. 0"
                ]
            },
            {
                question: "Q9 (2021): The equation of the normal to the curve y = ln(x) at the point (1, 0) is:",
                answer: "D.",
                options: [
                    "A. y = x - 1", 
                    "B. y = -x + 1", 
                    "C. y = x", 
                    "D. y = -x + 1"
                ]
            },
            {
                question: "Q10 (2020): The value of the integral from 0 to 1 of e^x / (1 + x^2) dx is:",
                answer: "C.",
                options: [
                    "A. 0", 
                    "B. 1", 
                    "C. ln(1+1)", 
                    "D. pi"
                ]
            }
        ],
        8: [
            {
                question: "Q1 (2020): The number of real solutions of the equation x^4 - 2x^3 + x^2 - 2x + 1 = 0 is:",
                answer: "B.",
                options: [
                    "A. 0", 
                    "B. 1", 
                    "C. 2", 
                    "D. 4"
                ]
            },
            {
                question: "Q2 (2021): The value of the limit lim(x -> 0) (sin(x^2) - x^2) / (x^4) is:",
                answer: "A.",
                options: [
                    "A. 0", 
                    "B. 1", 
                    "C. infinity", 
                    "D. -1"
                ]
            },
            {
                question: "Q3 (2020): The radius of convergence of the series sum from n=1 to infinity of (x^n)/(n!) is:",
                answer: "C.",
                options: [
                    "A. 1", 
                    "B. 2", 
                    "C. infinity", 
                    "D. 0"
                ]
            },
            {
                question: "Q4 (2021): The equation of the normal to the curve y = x^2 + 3x - 4 at the point (1, 0) is:",
                answer: "D.",
                options: [
                    "A. y = x - 1", 
                    "B. y = -x + 2", 
                    "C. y = x + 1", 
                    "D. y = -2x + 2"
                ]
            },
            {
                question: "Q5 (2022): The number of real solutions to the equation sin(x) = x in the interval [0, pi] is:",
                answer: "A.",
                options: [
                    "A. 1", 
                    "B. 2", 
                    "C. 0", 
                    "D. 3"
                ]
            },
            {
                question: "Q6 (2021): The value of the integral from 0 to 1 of (x^3 + 3x^2 + 2x) dx is:",
                answer: "C.",
                options: [
                    "A. 0", 
                    "B. 1", 
                    "C. 3", 
                    "D. 4"
                ]
            },
            {
                question: "Q7 (2020): The value of the integral from 0 to infinity of e^(-x) * sin(x) / (x^2 + 1) dx is:",
                answer: "B.",
                options: [
                    "A. 0", 
                    "B. pi / 2", 
                    "C. 1", 
                    "D. pi"
                ]
            },
            {
                question: "Q8 (2021): The sum of the series sum from n=1 to infinity of (-1)^n / n is:",
                answer: "A.",
                options: [
                    "A. -ln(2)", 
                    "B. ln(2)", 
                    "C. 1", 
                    "D. 0"
                ]
            },
            {
                question: "Q9 (2020): The equation of the tangent to the curve y = x^3 - 4x + 2 at the point (1, -1) is:",
                answer: "C.",
                options: [
                    "A. y = 3x - 4", 
                    "B. y = 4x - 3", 
                    "C. y = -3x + 2", 
                    "D. y = x + 1"
                ]
            },
            {
                question: "Q10 (2021): The value of the integral from 0 to 1 of (x^2 + 2x + 1) / (x^3 + 3x^2 + 3x + 1) dx is:",
                answer: "D.",
                options: [
                    "A. 0", 
                    "B. 1", 
                    "C. 2", 
                    "D. 3"
                ]
            }
        ],
        9: [
            {
                question: "Q1 (2020): The number of real solutions of the equation x^3 - 3x + 2 = 0 is:",
                answer: "A.",
                options: [
                    "A. 3", 
                    "B. 2", 
                    "C. 1", 
                    "D. 0"
                ]
            },
            {
                question: "Q2 (2021): The value of the limit lim(x -> 0) (1 - cos(x^2)) / (x^4) is:",
                answer: "C.",
                options: [
                    "A. 0", 
                    "B. 1", 
                    "C. 1/2", 
                    "D. infinity"
                ]
            },
            {
                question: "Q3 (2022): The sum of the series sum from n=1 to infinity of (-1)^n * (1/n^2) is:",
                answer: "B.",
                options: [
                    "A. 0", 
                    "B. -pi^2 / 12", 
                    "C. pi^2 / 6", 
                    "D. 1"
                ]
            },
            {
                question: "Q4 (2020): The equation of the tangent to the curve y = x^3 - 3x^2 + 2x at the point (1, 0) is:",
                answer: "D.",
                options: [
                    "A. y = 3x - 3", 
                    "B. y = x - 1", 
                    "C. y = 2x - 1", 
                    "D. y = -2x + 2"
                ]
            },
            {
                question: "Q5 (2021): The number of real solutions to the equation tan(x) = x in the interval [0, pi/2] is:",
                answer: "C.",
                options: [
                    "A. 1", 
                    "B. 2", 
                    "C. 0", 
                    "D. infinite"
                ]
            },
            {
                question: "Q6 (2022): The value of the integral from 0 to 1 of (x^3 + 2x^2 + 3x) dx is:",
                answer: "A.",
                options: [
                    "A. 2", 
                    "B. 3", 
                    "C. 4", 
                    "D. 5"
                ]
            },
            {
                question: "Q7 (2020): The value of the integral from 0 to infinity of (e^(-x))^2 / (1 + x^2) dx is:",
                answer: "B.",
                options: [
                    "A. 1", 
                    "B. pi / 4", 
                    "C. 2", 
                    "D. pi"
                ]
            },
            {
                question: "Q8 (2021): The sum of the series sum from n=1 to infinity of (x^n / n!) is equal to:",
                answer: "C.",
                options: [
                    "A. e^x", 
                    "B. sin(x)", 
                    "C. cos(x)", 
                    "D. ln(x)"
                ]
            },
            {
                question: "Q9 (2022): The equation of the normal to the curve y = x^2 + 3x - 5 at the point (1, -1) is:",
                answer: "A.",
                options: [
                    "A. y = -2x + 1", 
                    "B. y = 2x - 1", 
                    "C. y = x + 2", 
                    "D. y = -x - 1"
                ]
            },
            {
                question: "Q10 (2021): The value of the integral from 0 to pi/2 of sin^2(x) cos^2(x) dx is:",
                answer: "D.",
                options: [
                    "A. 0", 
                    "B. 1/2", 
                    "C. 1/4", 
                    "D. pi / 8"
                ]
            }
        ],
        10: [
            {
                question: "Q1 (2021): The number of real solutions to the equation x^5 - 5x^3 + 4x = 0 is:",
                answer: "C.",
                options: [
                    "A. 1", 
                    "B. 2", 
                    "C. 3", 
                    "D. 4"
                ]
            },
            {
                question: "Q2 (2022): The value of the limit lim(x -> 0) [(x^3 + 3x^2 + 3x) / (x^3 - 2x^2 + x)] is:",
                answer: "A.",
                options: [
                    "A. 3", 
                    "B. 2", 
                    "C. infinity", 
                    "D. 1"
                ]
            },
            {
                question: "Q3 (2022): The value of the integral from 0 to infinity of e^(-x^2) * sin(x) / (x^2 + 1) dx is:",
                answer: "D.",
                options: [
                    "A. 0", 
                    "B. pi / 4", 
                    "C. pi / 2", 
                    "D. pi / 2 * e^(-1)"
                ]
            },
            {
                question: "Q4 (2020): The number of solutions to the equation sin(x) + cos(x) = x in the interval [0, pi] is:",
                answer: "B.",
                options: [
                    "A. 1", 
                    "B. 2", 
                    "C. 3", 
                    "D. 0"
                ]
            },
            {
                question: "Q5 (2021): The equation of the tangent to the curve y = x^4 - 4x^3 + 6x^2 - 4x + 1 at the point (1, 0) is:",
                answer: "C.",
                options: [
                    "A. y = 4x - 4", 
                    "B. y = 2x - 1", 
                    "C. y = -3x + 3", 
                    "D. y = x + 1"
                ]
            },
            {
                question: "Q6 (2022): The number of real roots of the equation x^3 + x^2 + x + 1 = 0 is:",
                answer: "A.",
                options: [
                    "A. 1", 
                    "B. 2", 
                    "C. 3", 
                    "D. 0"
                ]
            },
            {
                question: "Q7 (2020): The value of the integral from 0 to pi/2 of sin^3(x) cos^3(x) dx is:",
                answer: "B.",
                options: [
                    "A. pi / 4", 
                    "B. pi / 8", 
                    "C. 1 / 2", 
                    "D. pi / 16"
                ]
            },
            {
                question: "Q8 (2021): The sum of the series sum from n=1 to infinity of (-1)^n * (n^2 / (n^3 + 1)) is:",
                answer: "C.",
                options: [
                    "A. 1", 
                    "B. -1", 
                    "C. -1/2", 
                    "D. 0"
                ]
            },
            {
                question: "Q9 (2022): The area of the region bounded by the curve y = e^(-x^2), the x-axis, and the lines x = -1 and x = 1 is:",
                answer: "D.",
                options: [
                    "A. 1", 
                    "B. 2", 
                    "C. e^(-1)", 
                    "D. sqrt(pi)"
                ]
            },
            {
                question: "Q10 (2020): The value of the limit lim(x -> 0) [(x^3 + 3x^2 + 2x) / (x^4 + 2x^3 - 3x^2)] is:",
                answer: "A.",
                options: [
                    "A. 3", 
                    "B. 2", 
                    "C. 0", 
                    "D. infinity"
                ]
            }
        ],                                                                                
    }
}

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
    currentSetText.textContent = `JEE Advanced ${capitalizeFirstLetter(currentSubject)}: Practice Set ${currentSet}`;

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
