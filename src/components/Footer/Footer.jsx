import React from 'react';
import { Facebook, Instagram, SportsBasketball, LinkedIn } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12 mt-auto">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h6 className="text-xl font-bold mb-4">ABOUT</h6>
                        <p className="text-sm">
                            This is a repository of all question papers from the National Forensic Sciences University. As there is no official repository, we decided to make one for student use. Feel free to contribute question papers to improve the repository.
                        </p>
                    </div>
                    <div>
                        <h6 className="text-xl font-bold mb-4">CATEGORIES</h6>
                        <ul className="text-sm space-y-2">
                            <li><Link to="#" className="hover:underline">B.Tech - M.Tech</Link></li>
                            <li><Link to="#" className="hover:underline">B.Sc - M.Sc</Link></li>
                            <li><Link to="#" className="hover:underline">BBA - LLB</Link></li>
                            <li><Link to="#" className="hover:underline">BBA - MBA</Link></li>
                            <li><Link to="#" className="hover:underline">M.Sc Crim</Link></li>
                            <li><Link to="#" className="hover:underline">M.Sc DFIS</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="text-xl font-bold mb-4">QUICK LINKS</h6>
                        <ul className="text-sm space-y-2">
                            <li><Link to="/about" className="hover:underline">About Us</Link></li>
                            <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
                            <li><Link to="#" className="hover:underline">Contribute</Link></li>
                            <li><Link to="#" className="hover:underline">Privacy Policy</Link></li>
                            {/* <li><Link to="#" className="hover:underline">Sitemap</Link></li> */}
                        </ul>
                    </div>
                    <div>
                        <h6 className="text-xl font-bold mb-4">CONTRIBUTORS</h6>
                        <ul className="text-sm space-y-2">
                            <li><Link to="#" className="hover:underline">Satyam Kumar Prasad</Link></li>
                            <li><Link to="#" className="hover:underline">Kushagra Singh</Link></li>
                            <li><Link to="#" className="hover:underline">Rupam Barui</Link></li>
                            {/* <li><Link to="#" className="hover:underline">Natalie Brown</Link></li> */}
                        </ul>
                    </div>
                </div>
                <div className="mt-8 flex justify-center space-x-4">
                    <a href="https://facebook.com" className="text-white">
                        <Facebook />
                    </a>
                    <a href="https://instagram.com" className="text-white">
                        <Instagram />
                    </a>
                    <a href="https://delhi.nfsu.ac.in" className="text-white">
                        <SportsBasketball />
                    </a>
                    <a href="https://linkedin.com" className="text-white">
                        <LinkedIn />
                    </a>
                </div>
                <p className="text-center text-sm text-gray-500 mt-4">
                    Copyright © 2024 All Rights Reserved by NFSU-DC.
                </p>
            </div>
        </footer>
    );
}

export default Footer;