import React from 'react';

const Gallery = () => {
    return (
          <div class="grid grid-cols-2 gap-4 w-fit ">
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.hefI_xijXHTgZkLxb2kW7wHaE7?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Forest 1"
            class="w-24 h-40 object-cover ml-12 rounded-md rounded-tl-[70px]"
          />

          <img
            src="https://tse2.mm.bing.net/th/id/OIP.skjUIIIhNf6E_8ENG18C5wHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Forest 2"
            class="w-40 h-40 object-cover  rounded-md  rounded-tr-[60px]"
          />

          <img
            src=" https://th.bing.com/th/id/R.60dfd50df9414eb3e224dac018770f12?rik=F3%2f6C0knJ7zQQw&pid=ImgRaw&r=0  "
            alt="Lake"
            class="w-40 h-40 object-cover  rounded-md  rounded-bl-[50px]"
          />

          <img
            src="https://www.holidify.com/images/cmsuploads/compressed/Beauty_of_sundarban_04_20220509173753.jpg"
            alt="House"
            class="w-24 h-40 ml-2 object-cover  rounded-md  rounded-br-[70px]"
          />
        </div>
    );
};

export default Gallery;