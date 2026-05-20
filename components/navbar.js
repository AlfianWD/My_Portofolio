export default {
  template: `
        <header class="sticky top-0 w-full p-8 md:py-4">
            <nav class="flex items-center justify-center md:p-4 lg:p-4">

                <!-- Logo Section -->
                    <a href="#" class="flex items-center w-xl">
                        <img src="src/assets/img/Logo_AlfianW.png" alt="Logo" class="w-40 md:w-50 px-4">
                    </a>

                <!-- Menu Section -->
                    <ul class="hidden space-x-8 gap-8 items-center font-secondary lg:flex">
                        <li class="text-white"><a href="#">Home</a></li>
                        <li class="text-white"><a href="#About">About</a></li>
                        <li class="text-white"><a href="#Project">Project</a></li>
                        <li class="text-white"><a href="#">Contact</a></li>
                    </ul>
                
                <!-- Hamburger Button -->
                <div class="flex space-x-8 gap-8 items-center lg:hidden px-4">
                    <i class="fa-solid fa-bars text-white text-2xl"></i>
                </div>
            </nav> 
        </header>
    `,
};
