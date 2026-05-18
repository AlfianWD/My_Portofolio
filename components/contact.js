export default {
  template: `
     <section class="contact bg-white">

            <!-- Contact-Tittle Section -->
                <div id="Contact" class="items-center justify-items-center px-16 py-16">
                    <h1 class="font-first text-black text-[30px]">Contact Us</h1>
                    <div class="w-24 h-[4px] bg-[#FCE05A] pb-1"></div>
                </div>

            <!-- Contact-Info Section -->
                <div class="grid grid-cols-2 gap-8 items-start justify-items-center pt-16 pb-16">

                    <!-- Description-Contact-Info Section -->
                    <div class="contact-info">

                        <div class="pb-16">
                            <h2 class="font-first text-[22px]">
                                <strong>
                                    Drop Me a Message
                                </strong>
                            </h2>
                            <p class="font-secondary font-[18px]">Let's Build Something Amazing Together!</p>
                        </div>
                    
                    <!-- Contact-Info-Phone -->
                        <div class="Conntact-Info-Phone flex items-center gap-4 mb-8">
                            <img src="src/assets/img/Img-Phone.png" alt="Img-Phone">
                            <p class="font-secondary">+62 895805124845</p>
                        </div>
                    
                    <!-- Contact-Info-Email -->
                        <div class="Contact-Info-Email flex items-center gap-3 mb-8">
                            <img src="src/assets/img/Img-Mail.png" alt="Img-Mail">
                            <p class="font-secondary">alfianw230@gmail.com</p>
                        </div>
                    </div>

                    <!-- Contact-Form Section -->
                    <div class="border-black border-2 bg-[#FCE05A] rounded-md p-8 w-full max-w-md">
                        <form class="space-y-4" action="">
                            
                            <!-- Name Area -->
                            <div>
                                <input class="w-full p-2 bg-white text-black border border-black rounded-sm" type="text" placeholder="Name">
                            </div>

                            <!-- Email Area -->
                            <div>
                                <input class="w-full p-2 bg-white text-black border border-black rounded-sm" type="email" placeholder="Email">
                            </div>

                            <!-- Message Area -->
                            <div>
                                <textarea class="w-full h-25 p-2 bg-white text-black border border-black rounded-sm" name="" id="" placeholder="Message"></textarea>
                            </div>

                            <!-- Button Area -->
                            <button class="bg-black text-white rounded-md px-6 py-2 font-secondary" type="submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
        </section>
    `,
};
