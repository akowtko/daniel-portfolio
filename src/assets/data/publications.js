const publications = [
  {
    title: 'Ultrafast self-induced X-ray transparency and loss of magnetic diffraction',
    authorPosition: 2,
    authors: `Z. Chen, D. J. Higley, M. Beye, M. Hantschmann, V. Mehta, O. Hellwig, A. Mitra, S. Bonetti, M. Bucher, 
    S. Carron, T. Chase, E. Jal, R. Kukreja, T. Liu, A. H. Reid, G. L. Dakovski, A. Föhlisch, W. F. Schlotter, 
    H. A. Dürr, and J. Stöhr`,
    journal: 'Physical Review Letters',
    article: '137403',
    volume: '121',
    year: '2018',
    status: 'Published',
    abstract: `Using ultrafast ≃2.5fs and ≃25fs self-amplified spontaneous emission pulses of increasing intensity and 
    a novel experimental scheme, we report the concurrent increase of stimulated emission in the forward direction and 
    loss of out-of-beam diffraction contrast for a Co/Pd multilayer sample. The experimental results are quantitatively 
    accounted for by a statistical description of the pulses in conjunction with the optical Bloch equations. The 
    dependence of the stimulated sample response on the incident intensity, coherence time, and energy jitter of the 
    employed pulses reveals the importance of increased control of x-ray free electron laser radiation.`,
    link: 'https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.121.137403',
  },
  {
    title: 'Ultrafast terahertz field control of electronic and structural interactions in vanadium dioxide',
    authorPosition: 17,
    authors: `A. X. Gray, M. C. Hoffmann, J. Jeong, N. P. Aetukuri, D. Zhu, H. Y. Hwang, N. C. Brandt, H. Wen, 
    A. J. Sternbach, S. Bonetti, A. H. Reid, R. Kukreja, C. Graves, T. Wang, P. Granitzka, Z. Chen, D. J. Higley, 
    T. Chase, E. Jal, E. Abreu, M. K. Liu, T.-C. Weng, D. Sokaras, D. Nordlund, M. Chollet, R. Alonso-Mori, H. Lemke, 
    J. M. Glownia, M. Trigo, Y. Zhu, H. Ohldag, J. W. Freeland, M. G. Samant, J. Berakdar, R. D. Averitt, K. A. Nelson, 
    S. S. P. Parkin, H. A. Dürr`,
    journal: 'Physical Review B',
    article: '045104',
    volume: '98',
    year: '2018',
    status: 'Published',
    abstract: `Vanadium dioxide (VO<sub>2</sub>), an archetypal correlated-electron material, undergoes an insulator-metal 
    transition near room temperature that exhibits electron-correlation-driven and structurally driven physics. Using 
    ultrafast temperature- and fluence-dependent optical spectroscopy and x-ray scattering, we show that multiple 
    interrelated electronic and structural processes in the nonequilibrium dynamics in VO<sub>2</sub> can be disentangled in the 
    time domain. Specifically, following intense subpicosecond terahertz (THz) electric-field excitation, a partial 
    collapse of the insulating gap occurs within the first picosecond. At temperatures sufficiently close to the 
    transition temperature and for THz peak fields above a threshold of approximately 1 MV/cm, this electronic 
    reconfiguration initiates a change in lattice symmetry taking place on a slower timescale. We identify the kinetic 
    energy increase of electrons tunneling in the strong electric field as the driving force, illustrating a promising 
    method to control electronic and structural interactions in correlated materials on an ultrafast timescale.`,
    link: 'https://journals.aps.org/prb/abstract/10.1103/PhysRevB.98.045104',
  },
  {
    title: 'Beyond a phenomenological description of magnetostriction',
    authorPosition: 14,
    authors: `A. H. Reid, X. Shen, P. Maldonado, T. Chase, E. Jal, P. W. Granitzka, K. Carva, R. K. Li, J. Li, L. Wu, 
    T. Vecchione, T. Liu, Z. Chen, D. J. Higley, N. Hartmann, R. Coffee, J. Wu, G. L. Dakovski, W. Schlotter, H. Ohldag,
     Y. K. Takahashi, V. Mehta, O. Hellwig, A. Fry, Y. Zhu, J. Cao, E. E. Fullerton, J. Stöhr, P. M. Oppeneer, 
    X. J. Wang, and H. A. Dürr`,
    journal: 'Nature Communications',
    article: '388',
    volume: '9',
    year: '2018',
    status: 'Published',
    abstract: `Magnetostriction, the strain induced by a change in magnetization, is a universal effect in magnetic 
    materials. Owing to the difficulty in unraveling its microscopic origin, it has been largely treated 
    phenomenologically. Here, we show how the source of magnetostriction—the underlying magnetoelastic stress—can be 
    separated in the time domain, opening the door for an atomistic understanding. X-ray and electron diffraction are 
    used to separate the sub-picosecond spin and lattice responses of FePt nanoparticles. Following excitation with a 
    50-fs laser pulse, time-resolved X-ray diffraction demonstrates that magnetic order is lost within the nanoparticles
     with a time constant of 146 fs. Ultrafast electron diffraction reveals that this demagnetization is followed by an 
     anisotropic, three-dimensional lattice motion. Analysis of the size, speed, and symmetry of the lattice motion, 
     together with <i>ab initio</i> calculations accounting for the stresses due to electrons and phonons, allow us to reveal 
     the magnetoelastic stress generated by demagnetization.`,
    link: 'https://www.nature.com/articles/s41467-017-02730-7',
  },
  {
    title: 'Magnetic switching in granular FePt layers promoted by near-field laser enhancement',
    authorPosition: 5,
    authors: `P. W. Granitzka, E. Jal, L. L. Le Guyader, M. Savoini, D. J. Higley, T. Liu, Z. Chen, T. Chase, H. Ohldag,
     G. L. Dakovski, W. F. Schlotter, S. Carron, M. C. Hoffman, A. X. Gray, P. Shafer, E. Arenholz, O. Hellwig, 
     V. Mehta, Y. K. Takahashi, J. Wang, E. E. Fullerton, J. Stöhr, A. H. Reid, and H. A. Dürr`,
    journal: 'Nano Letters',
    article: '2426',
    volume: '17',
    year: '2017',
    status: 'Published',
    abstract: `Light-matter interaction at the nanoscale in magnetic materials is a topic of intense research in view of
     potential applications in next-generation high-density magnetic recording. Laser-assisted switching provides a 
     pathway for overcoming the material constraints of high-anisotropy and high-packing density media, though much 
     about the dynamics of the switching process remains unexplored. We use ultrafast small-angle X-ray scattering at an
      X-ray free-electron laser to probe the magnetic switching dynamics of FePt nanoparticles embedded in a carbon 
      matrix following excitation by an optical femtosecond laser pulse. We observe that the combination of laser 
      excitation and applied static magnetic field, 1 order of magnitude smaller than the coercive field, can overcome 
      the magnetic anisotropy barrier between “up” and “down” magnetization, enabling magnetization switching. This 
      magnetic switching is found to be inhomogeneous throughout the material with some individual FePt nanoparticles 
      neither switching nor demagnetizing. The origin of this behavior is identified as the near-field modification of 
      the incident laser radiation around FePt nanoparticles. The fraction of not-switching nanoparticles is influenced 
      by the heat flow between FePt and a heat-sink layer.`,
    link: 'https://pubs.acs.org/doi/full/10.1021/acs.nanolett.7b00052',
  },
  {
    title: 'Generation mechanism of terahertz coherent acoustic phonons in Fe',
    authorPosition: 5,
    authors: `T. Henighan, M. Trigo, S. Bonetti, P. Granitzka, D. Higley, Z. Chen, M. P. Jiang, R. Kukreja, A. Gray, 
    A. H. Reid, E. Jal, M. C. Hoffman, M. Kozina, S. Song, M. Chollet, D. Zhu, P. F. Xu, J. Jeong, K. Carva, 
    P. Maldonado, P. M. Oppeneer, M. G. Samant, S. S. P. Parkin, D. A. Reis, and H. A. Dür`,
    journal: 'Physical Review B',
    article: '220301',
    volume: '93',
    year: '2016',
    status: 'Published',
    abstract: `We use femtosecond time-resolved hard x-ray scattering to detect coherent acoustic phonons generated 
    during ultrafast laser excitation of ferromagnetic bcc Fe films grown on MgO(001). We observe the coherent 
    longitudinal-acoustic phonons as a function of wave vector through analysis of the temporal oscillations in the 
    x-ray scattering signal. The width of the extracted strain wave front associated with this coherent motion is 
    ∼100fs. An effective electronic Grüneisen parameter is extracted within a two-temperature model. However, ab initio 
    calculations show that the phonons are nonthermal on the time scale of the experiment, which calls into question 
    the validity of extracting physical constants by fitting such a two-temperature model.`,
    link: 'https://journals.aps.org/prb/abstract/10.1103/PhysRevB.93.220301',
  },
  {
    title: 'Polarization control in an X-ray free electron laser',
    authorPosition: 15,
    authors: `A. A. Lutman, J. P. MacArthur, M. Ilchen, A. O. Lindahl, J. Buck, R. N. Coffee, G. L. Dakovski, 
    L. Dammann, Y. Ding, H. A. Dürr, L. Glaser, J. Grünert, G. Hartmann, N. Hartmann, D. Higley, K. Hirsch, 
    Y. I. Levashov, A. Marinelli, T. Maxwell, A. Mitra, S. Moeller, T. Osipov, F. Peters, M. Planas, I. Shevchuk, 
    W. F. Schlotter, F. Scholz, Jörn Seltmann, J. Viefhaus, P. Walter, Z. R. Wolf, Z. Huang, and H.-D. Nuhn`,
    journal: 'Nature Photonics',
    article: '468',
    volume: '10',
    year: '2016',
    status: 'Published',
    abstract: `X-ray free-electron lasers are unique sources of high-brightness coherent radiation. However, existing 
    devices supply only linearly polarized light, precluding studies of chiral dynamics. A device called the Delta 
    undulator has been installed at the Linac Coherent Light Source (LCLS) to provide tunable polarization. With a 
    reverse tapered planar undulator line to pre-microbunch the beam and the novel technique of beam diverting, hundreds
     of microjoules of circularly polarized X-ray pulses are produced at 500–1,200 eV. These X-ray pulses are tens of 
     femtoseconds long, have a degree of circular polarization of 0.98<sub>–0.04</sub><sup>+0.02</sup> at 707 eV and may
      be scanned in energy.
      We also present a new two-colour X-ray pump–X-ray probe operating mode for the LCLS. Energy differences of 
      ΔE/E = 2.4% are supported, and the second pulse can be adjusted to any elliptical polarization. In this mode, the 
      pointing, timing, intensity and wavelength of the two pulses can be modified.`,
    link: 'https://www.nature.com/articles/nphoton.2016.79',
  },
];

export default publications;
