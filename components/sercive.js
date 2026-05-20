export default {
  template: `
        <section id="services" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                                      mt-20 mb-20 gap-8 lg:p-8 justify-items-center font-secondary">
            <!-- Card 1 -->
            <div class="services-card bg-[#35363B] p-10 pr-12 md:pr-15 rounded-md">
                <img src="src/assets/img/Img_Service-1.png" alt="My_Services-01" class="items-start">
                <h2 class="text-white mb-8 mt-8">UI/UX Designing</h2>
                <a href="#UI-UX-Designing" class="rounded-none bg-[#FCE05A] p-2">Know More ></a>
            </div>

            <!-- Card 2 -->
            <div class="services-card bg-[#35363B] p-10 pr-6 md:pr-10 lg:pr-15 rounded-md">
                <img src="src/assets/img/Img_Service-2.png" alt="My_Services-02" class="items-start">
                <h2 class="text-white mb-8 mt-8">Graphic Designing</h2>
                <a href="#Graphic-Designing" class="rounded-none bg-[#FCE05A] p-2">Know More ></a>
            </div>

            <!-- Card 3 -->
                <div class="services-card bg-[#35363B] p-10 pr-6 md:pr-15 md:col-span-2 justify-center lg:pr-15 lg:col-span-1 rounded-md">
                    <img src="src/assets/img/Img_Service-3.png" alt="My_Services-03" class="items-start">
                    <h2 class="text-white mb-8 mt-8">Web Development</h2>
                    <a href="#Web-Development" class="rounded-none bg-[#FCE05A] p-2">Know More ></a>
                </div>
        </section>
    `,
};
