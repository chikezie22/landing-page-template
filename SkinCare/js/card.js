const cards = [
  {
    title: 'Cactus Soap Bar',
    desc: 'A moisturizing soap with cactus extract that gently cleanses and nourishes the skin, perfect for dry and sensitive skin.',
    price: '$55.00',
    oldPrice: '$60.00',
    image: './assets/images/card-1.png',
  },
  {
    title: 'Lavender Lotion',
    desc: 'Soothing lavender lotion for all skin types. Keeps your skin soft and smooth.',
    price: '$35.00',
    oldPrice: '$40.00',
    image: './assets/images/card-2.png',
  },
  {
    title: 'Mint Face Scrub',
    desc: 'Refreshing mint scrub that exfoliates dead skin and leaves a cool sensation.',
    price: '$25.00',
    oldPrice: '$30.00',
    image: './assets/images/card-3.png',
  },
  {
    title: 'Aloe Vera Gel',
    desc: 'Natural aloe vera gel for soothing sunburns and hydrating skin daily.',
    price: '$18.00',
    oldPrice: '$22.00',
    image: './assets/images/card-4.png',
  },
  {
    title: 'Charcoal Face Mask',
    desc: 'Deep-cleansing charcoal mask that removes impurities and tightens pores.',
    price: '$20.00',
    oldPrice: '$26.00',
    image: './assets/images/card-5.png',
  },
  {
    title: 'Rose Water Toner',
    desc: 'Gentle rose water toner to balance skin pH and refresh your face instantly.',
    price: '$15.00',
    oldPrice: '$18.00',
    image: './assets/images/card-6.png',
  },
];

const container = document.getElementById('card-container');

cards.forEach((card) => {
  const cardHTML = `
    <div class="rounded-[30px] p-5 grid gap-5 border border-[#f6e4e8] min-h-[412px] max-w-[270px] transition-all duration-200">
      <div class="max-w-[230px] overflow-clip rounded-[20px]">
        <img class="w-full h-full object-cover" src="${card.image}" alt="card image" />
      </div>
      <div class="flex flex-col gap-2 font-lato">
        <p class="font-semibold text-base">${card.title}</p>
        <p class="italic text-sm font-normal">${card.desc}</p>
      </div>
      <div class="flex flex-col gap-2">
        <div class="flex gap-3 font-semibold text-base">
          <p class="text-accent">${card.price}</p>
          <p class="line-through">${card.oldPrice}</p>
        </div>
        <button class="w-fit bg-primary text-white py-2 px-4 rounded-[10px]">Buy</button>
      </div>
    </div>
  `;

  container.innerHTML += cardHTML;
});

const buttons = document.querySelectorAll('.btn');
buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    container.classList.add('opacity-0');
    setTimeout(() => {
      buttons.forEach((b) => b.classList.remove('bg-accent'));
      buttons.forEach((b) => b.classList.add('bg-secondary-light'));

      // Highlight clicked
      btn.classList.remove('bg-secondary-light');
      btn.classList.add('bg-accent');
      container.classList.remove('opacity-0');
    }, 200);
  });
});
