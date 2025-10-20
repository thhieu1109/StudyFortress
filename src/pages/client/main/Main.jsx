import React from 'react';
import HeroCombined from '../../../components/client/home/HeroCombined';
import StatsSection from '../../../components/client/home/StatsSection';
import PopularCategories from '../../../components/client/home/PopularCategories';
import TopCourses from '../../../components/client/home/TopCourses';
import Testimonials from '../../../components/client/home/Testimonials';
import Newsletter from '../../../components/client/home/Newsletter';

function Main(props) {
    return (
        <div>
            {/* Hero Section */}
            <section className="px-4 md:px-8 mb-16">
                <HeroCombined />
            </section>

            {/* Stats Section */}
            <StatsSection />

            {/* Popular Categories */}
            <PopularCategories />

            {/* Featured Courses */}
            <TopCourses />

            {/* Testimonials */}
            <Testimonials />

            {/* Newsletter */}
            <Newsletter />

            {/* Footer */}
        </div>
    );
}

export default Main;