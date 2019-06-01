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
  {
    title: 'Correlation-driven insulator-metal transition in near-ideal vanadium dioxide films',
    authorPosition: 7,
    authors: `A. X. Gray, J. Jeong, N. P. Aeturki, P. Granitzka, Z. Chen, R. Kukreja, D. Higley, T. Chase, A. H. Reid, 
    H. Ohldag, M. A. Marcus, A. Scholl, A. T. Young, A. Doran, C. A. Jenkins, P. Shafer, E. Arenholz, M. G. Samant, 
    S. S. P. Parkin, and H. A. Dürr`,
    journal: 'Physical Review Letters',
    article: '116403',
    volume: '116',
    year: '2016',
    status: 'Published',
    abstract: `We use polarization- and temperature-dependent x-ray absorption spectroscopy, in combination with 
    photoelectron microscopy, x-ray diffraction, and electronic transport measurements, to study the driving force 
    behind the insulator-metal transition in VO<sub>2</sub>. We show that both the collapse of the insulating gap and 
    the concomitant change in crystal symmetry in homogeneously strained single-crystalline VO<sub>2</sub> films are 
    preceded by the purely electronic softening of Coulomb correlations within V-V singlet dimers. This process starts 
    7 K (±0.3K) below the transition temperature, as conventionally defined by electronic transport and x-ray 
    diffraction measurements, and sets the energy scale for driving the near-room-temperature insulator-metal transition
     in this technologically promising material.`,
    link: 'https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.116.116403',
  },
  {
    title: 'Femtosecond X-ray magnetic circular dichorism absorption spectroscopy at an X-ray free electron laser',
    authorPosition: 1,
    authors: `D. J. Higley, K. Hirsch, G. L. Dakovski, E. Jal, E. Yuan, T. Liu, A. A. Lutman, J. P. MacArthur, 
    E. Arenholz, Z. Chen, G. Coslovich, P. Denes, P. W. Granitzka, P. Hart, M. C. Hoffman, J. Joseph, L. Le Guyader,
     A. Mitra, S. Moeller, H. Ohldag, M. Seaberg, P. Shafer, J. Stöhr, A. Tsukamoto, H.-D. Nuhn, A. H. Reid, H. A. Dürr,
      and W. F. Schlotter`,
    journal: 'Review of Scientific Instruments',
    article: '033110',
    volume: '87',
    year: '2016',
    status: 'Published',
    abstract: `X-ray magnetic circular dichroism spectroscopy using an X-ray free electron laser is demonstrated with 
    spectra over the Fe L<sub>3,2</sub>-edges. The high brightness of the X-ray free electron laser combined with high 
    accuracy detection of incident and transmitted X-rays enables ultrafast X-ray magnetic circular dichroism studies of
     unprecedented sensitivity. This new capability is applied to a study of all-optical magnetic switching dynamics of 
     Fe and Gd magnetic sublattices in a GdFeCo thin film above its magnetization compensation temperature.`,
    link: 'https://aip.scitation.org/doi/abs/10.1063/1.4944410?TRACK=RSS&journalCode=rsi',
  },
  {
    title: 'Nanoscale confinement of all-optical magnetic switching in TbFeCo-competition with nanoscale heterogeneity',
    authorPosition: 9,
    authors: `T. M. Liu, T. Wang, A. H. Reid, M. Savoini, X. Wu, B. Koene, P. Granitzka, C. E. Graves, D. J. Higley, 
    Z. Chen, G. Razinskas, M. Hantschmann, A. Scherz, J. Stöhr, A. Tsukamoto, B. Hecht, A. V. Kimel, A. Kirilyuk, 
    T. Rasing, and H. A. Dürr`,
    journal: 'Nano Letters',
    article: '6862',
    volume: '15',
    year: '2015',
    status: 'Published',
    abstract: `Single femtosecond optical laser pulses, of sufficient intensity, are demonstrated to reverse 
    magnetization in a process known as all-optical switching. Gold two-wire antennas are placed on the all-optical 
    switching film TbFeCo. These structures are resonant with the optical field, and they create a field enhancement in 
    the near-field which confines the area where optical switching can occur. The magnetic switching that occurs around 
    and below the antenna is imaged using resonant X-ray holography and magnetic circular dichroism. The results not 
    only show the feasibility of controllable switching with antenna assistance but also demonstrate the highly 
    inhomogeneous nature of the switching process, which is attributed to the process depending on the material’s 
    heterogeneity.`,
    link: 'https://pubs.acs.org/doi/abs/10.1021/acs.nanolett.5b02743',
  },
  {
    title: 'Two-dimensional spatial frequency-modulated imag- ing through parallel acquisition of line images',
    authorPosition: 1,
    authors: 'D. J. Higley, D. G. Winters, and R. A. Bartels',
    journal: 'Optical Letters',
    article: '1763',
    volume: '38',
    year: '2013',
    status: 'Published',
    abstract: `This Letter demonstrates a two-dimensional imaging technique that uses a line scan camera to resolve one
     spatial dimension and temporal modulation to resolve the perpendicular dimension. A temporal intensity modulation,
      which increases linearly in frequency along one direction is applied to an illumination beam. The modulated light
       distribution is imaged onto an object then onto a line scan camera oriented perpendicularly to the direction of 
       the modulation sweep. A line diffuser is placed shortly before the line scan camera and diffuses light along the 
       direction of modulation so that each pixel collects all modulation frequencies.`,
    link: 'https://www.osapublishing.org/ol/abstract.cfm?uri=ol-38-11-1763',
  },
  {
    title: 'Theory of diffraction effects in spatial frequency-modulated imaging',
    authorPosition: 1,
    authors: 'D. J. Higley, D. G. Winters, G. L. Futia, and R. A. Bartels',
    journal: 'Journal of the Optical Society of America',
    article: '2579',
    volume: '29',
    year: '2012',
    status: 'Published',
    abstract: `An analytic theory describing the effects of diffraction and aberrations on single-pixel imaging 
    performed by temporally modulating illumination light is presented. This method encodes spatial information using 
    sinusoidal temporal modulations that are chirped in frequency across the extent of an illumination line focus. With
     some approximations, a point spread function relationship as a function of defocus or other aberrations is found 
     for both spatially coherent and incoherent cases. The theory is validated through experiments and simulations, 
     including measurement of the transverse and longitudinal optical transfer function, and confirmation of 
     insensitivity to aberrations and significant optical scattering after encoding of spatial information through 
     temporal modulation.`,
    link: 'https://www.osapublishing.org/josaa/abstract.cfm?uri=josaa-29-12-2579',
  },
  {
    title: 'Distinguishing Local and non-Local Demagnetization in Ferromagnetic FePt Nanoparticles',
    authorPosition: 8,
    authors: `Patrick W. Granitzka, Alexander H. Reid, Jerome Hurst, Emmanuelle Jal, Loïc Le Guyader, Tian-Min Liu, 
    Leandro Salemi, Daniel J. Higley, Tyler Chase, Zhao Chen, Marco Berritta, William F. Schlotter, Hendrik Ohldag, 
    Georgi L. Dakovski, Sebastian Carron, Matthias C. Hoffmann, Jian Wang, Virat Mehta, Olav Hellwig, Eric E. Fullerton,
     Yukiko K. Takahashi, Joachim Stöhr, Peter M. Oppeneer, Hermann A. Dürr`,
    journal: '',
    article: '',
    volume: '',
    year: '2019',
    status: 'Under Review',
    abstract: `Time-resolved coherent X-ray diffraction is used to measure the spatially resolved magnetization 
    structure within FePt nanoparticles during laser-induced ultrafast demagnetization. The momentum-dependent X-ray 
    magnetic diffraction shows that demagnetization proceeds at different rates at different X-ray momentum transfer. 
    We show that the observed momentum-dependent scattering has the signature of inhomogeneous demagnetization within 
    the nanoparticles, with the demagnetization proceeding more rapidly at the boundary of the nanoparticle. A shell 
    region of reduced magnetization forms and moves inwards at a supermagnonic velocity. Spin-transport calculations 
    show that the shell formation is driven by superdiffusive spin flux mainly leaving the nanoparticle into the 
    surrounding carbon. Quantifying this non-local contribution to the demagnetization allows us to separate it from 
    the local demagnetization.`,
    link: 'https://arxiv.org/abs/1903.08287',
  },
  {
    title: `Ultrafast X-Ray Induced Changes of the Electronic and Magnetic Response of Solids Due to Valence Electron 
    Redistribution`,
    authorPosition: 1,
    authors: `Daniel J. Higley, Alex H. Reid, Zhao Chen, Loïc Le Guyader, Olav Hellwig, Alberto A. Lutman, Tianmin Liu,
     Padraic Shafer, Tyler Chase, Georgi L. Dakovski, Ankush Mitra, Edwin Yuan, Justine Schlappa, Hermann A. Dürr,
      William F. Schlotter, Joachim Stöhr`,
    journal: '',
    article: '',
    volume: '',
    year: '2019',
    status: 'Under Review',
    abstract: `We report a novel mechanism, consisting of redistribution of valence electrons near the Fermi level, 
    during interactions of intense femtosecond X-ray pulses with a Co/Pd multilayer. The changes in Co 3d valence shell 
    occupation were directly revealed by fluence-dependent changes of the Co L<sub>3</sub> X-ray absorption and magnetic
     circular dichroism spectra near the excitation threshold. The valence shell redistribution arises from inelastic 
     scattering of high energy Auger electrons and photoelectrons that lead to transient holes below and electrons above
      the Fermi level on the femtosecond time scale. The valence electron reshuffling effect scales with the energy 
      deposited by X-rays and within 17 fs extends to valence states within 2 eV of the Fermi level. As a consequence 
      the sample demagnetizes by more than twenty percent due to magnon generation.`,
    link: 'https://arxiv.org/abs/1902.04611',
  },
];

export default publications;
