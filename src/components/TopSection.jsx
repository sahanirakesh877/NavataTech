import React from "react";

const TopSection = () => {
  return (
    <>
      <section class="bg-primary text-white overflow-hidden top ">
        <div class="container mx-auto py-2 px-5 flex flex-wrap flex-col sm:flex-row ">
          <span class="inline-flex sm:mt-0 mt-2  justify-center sm:justify-start text-texcol gap-3">
            <p class="flex items-center text-sm ">
              <i class="fa-solid fa-phone mr-2"></i>9704501220
            </p>
            <p class="flex items-center text-sm ">
              <i class="fa-solid fa-envelope text-sm mr-2"></i>
              technavata@gmail.com
            </p>
          </span>

          <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start text-texcol gap-3 ">
            <a href="https://www.facebook.com/profile.php?id=61554605785487">
              <p class="px-1 rounded-full">
                <i class="fa-brands fa-facebook"></i>
              </p>
            </a>
            <a href="https://www.instagram.com/techhnavata/?hl=en">
              <p class="px-1 rounded-full">
                <i class="fa-brands fa-instagram"></i>
              </p>
            </a>
            <a href="https://www.linkedin.com/in/navata-tech-57288a2ab/">
              <p class="px-1 rounded-full">
                <i class="fa-brands fa-linkedin"></i>
              </p>
            </a>
            <a href="https://wa.me/+9779704501215">
              <p class="px-1 rounded-full">
                <i class="fa-brands fa-whatsapp"></i>
              </p>
            </a>
          </span>
        </div>
      </section>
      <style jsx>{`
        @media screen and (max-width: 640px) {
          .top {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default TopSection;
