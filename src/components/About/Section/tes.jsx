<div className='bg-slate-500 bg-opacity-30 rounded-xl p-5 mt-40'>
<Row className='mt-5'>
    <Col xs={12} md={5} className='flex items-center'>
        <div>
            <div className='flex items-center'>
                <span className='text-white font-audiowide text-[60px]'>
                    01
                </span>
            </div>

            <div className='flex flex-col'>
                <span className="text-[42px] text-white font-bold inline-block">
                    Virtual Office Order & Company Profile
                </span>

                <span className="text-[18px] text-white mt-3">
                    Awan Kusuma is a company that provides virtual office services and company profiles.
                </span>
            </div>
        </div>
    </Col>

    <Col xs={12} md={7} className='d-none d-lg-block'>
        <div>
            <div className='flex items-center justify-center'>

                <div className="border-2 rounded-xl orange_border">
                    <div className='relative rounded-xl w-[500px] h-[240px] overflow-hidden'>
                        <img
                            src="https://img.freepik.com/premium-photo/road-closeup-bokeh-background_206268-1785.jpg"
                            alt="Background"
                            className="absolute scale-x-125 w-[600px] h-[300px] object-cover saturate-[1.5] brightness-90 pointer-events-none"
                            style={{
                                objectPosition: 'calc(-50% + (var(--x) * 30px)) calc(43% + (var(--y) * -20px))',
                                zIndex: 1,
                            }}
                        />

                        <img
                            src="https://www.pngkey.com/png/full/68-684285_office-people-png-freeuse-download-professional-with-laptop.png"
                            alt="Foreground"
                            className="absolute w-[500px] h-[240px] object-cover pointer-events-none"
                            style={{
                                objectPosition: 'calc(-50% + (var(--x) * 40px)) calc(43% + (var(--y) * -40px))',
                                zIndex: 2,
                            }}
                        />

                        <h3
                            // className="absolute top-6 left-1/2 text-8xl font-bold uppercase text-white translate-x-[-50%]"
                            className='absolute bottom-2 left-1/2 text-5xl font-bold uppercase text-[#d8ad50] translate-x-[-50%]'
                            style={{
                                transform: 'translate(calc(-50% + (var(--x) * -30px)), calc(var(--y) * -20px))',
                                zIndex: 3,
                            }}
                        >
                            Awan Kusuma
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </Col>
</Row>

<Row className='mt-5'>
    <Col md={12} className='flex flex-col items-center'>
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center justify-between'>
                <div className='bg-white rounded-xl'>
                    <img src={awan1} alt="Background" className='object-cover w-full h-[200px] rounded-xl' />
                </div>
                <div className='bg-white rounded-xl'>
                    <img src={awan2} alt="Background" className='object-cover w-full h-[200px] rounded-xl' />
                </div>
                <div className='bg-white rounded-xl'>
                    <img src={awan3} alt="Background" className='object-cover w-full h-[200px] rounded-xl' />
                </div>
            </div>
        </div>
    </Col>
</Row>

<Row className='mt-3'>
    <Col md={6} xs={12}>
        <div className='flex flex-col'>
            <span className='text-[29px] text-white font-bold inline-block'>
                Projects Overview
            </span>

            <div className='text-[18px] text-white mt-1 flex flex-col sm:flex-row'>
                <span className='w-32'>Live Website</span>
                <div className='flex-1'> <span className='hidden md:inline'>:</span> <a href="https://www.awankusuma.com" className='text-orange-500'>https://www.awankusuma.com</a></div>
            </div>
            <div className='text-[18px] text-white mt-1 flex flex-col sm:flex-row'>
                <span className='w-32'>Source Code</span>
                <div className='flex-1'> <span className='hidden md:inline'>:</span> <span className='text-red-500'>Confidential</span></div>
            </div>
            <div className='text-[18px] text-white mt-1 flex flex-col sm:flex-row'>
                <span className='w-32'>Technology</span>
                <div className='flex'> <span className='hidden md:inline'>:</span>
                    <ul className='list-disc list-inside m-0'>
                        <li>FrontEnd
                            <ul className='list-disc list-inside ml-4'>
                                <li>NextJS</li>
                                <li>TailwindCSS</li>
                            </ul>
                        </li>
                        <li>Backend
                            <ul className='list-disc list-inside ml-4'>
                                <li>NestJS</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </Col>

    <Col md={6} xs={12}>
        <div className='flex flex-col'>
            <span className='text-[29px] text-white font-bold inline-block'>
                Projects Description
            </span>

            <span className='text-[18px] text-white mt-1 text-justify indent-10'>
                Awan Kusuma is a company that provides virtual office services and company profiles. This website is a website that provides information about the company and the services they provide. This Website developed with 3 service, which are the main website, cms (admin panel), and api (backend).
            </span>
        </div>
    </Col>
</Row>
</div>