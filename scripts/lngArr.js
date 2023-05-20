const translate = (word) => {
  return langArr[word][localStorage['lang']];
};

const langArr = {
  submit: {
    fi: 'Lähetä',
    en: 'Send',
  },
  call_us: {
    fi: 'Soita meile ',
    en: 'Call us',
  },
  write_us: {
    fi: 'Ota yhteyttä',
    en: 'Contact us',
  },
  date: {
    fi: 'Päivämäärä',
    en: 'date',
  },
  phone: {
    fi: 'puhelin',
    en: 'phone',
  },
  problem: {
    fi: 'ongelma',
    en: 'problem',
  },
  problem__message: {
    fi: 'Et ole antanut',
    en: 'you did not enter',
  },
  message: {
    fi: 'Tilaus on luotu, odota soittoa päivän aikana',
    en: 'The order has been created, expect a call during the day',
  },
  alert_added: {
    fi: 'lisätty korttiin',
    en: 'added into your card',
  },
  alert_already: {
    fi: 'on jo kortillasi',
    en: 'is already in your card',
  },
  main__button: {
    fi: 'Pääsivu',
    en: 'Main',
  },
  total: {
    fi: 'Summa',
    en: 'Final price',
  },
  order__button: {
    fi: 'Tilause',
    en: 'Order',
  },
  about: {
    fi: 'About:',
    en: 'About:',
  },
  about__text: {
    fi: `
        <p>Tervetuloa vuoden 2023 siivouspalveluyritykseen! Olemme ylpeitä tarjoamistamme laadukkaista ja luotettavista siivouspalveluista, jotka auttavat asiakkaitamme pitämään kodit ja toimitilat puhtaina ja viihtyisinä.</p>

        <p>Meidän ammattitaitoiset siivoojamme ovat koulutettuja ja kokemuksellisia, joten voit olla varma että he hoitavat siivoustyöt nopeasti ja tehokkaasti. Käytämme vain ympäristöystävällisiä ja turvallisia puhdistusaineita, joten voit olla huoleti siitä, että kotisi tai toimitilasi ovat turvallisia ja puhtaita.</p>
        
        <p>Tarjoamme laajan valikoiman siivouspalveluita, kuten säännöllistä koti- ja toimitilasiivousta, ikkunanpesua, lattian vahaus ja mattopesua. Voit myös pyytää meiltä erityisesti räätälöityjä siivouspalveluita, jotka vastaavat tarkasti sinun tarpeitasi.</p>
        
        <p>Asiakkaidemme tyytyväisyys on meille erittäin tärkeää, ja siksi pyrimme aina tarjoamaan parhaan mahdollisen palvelun ja ylittämään asiakkaidemme odotukset. Yhdessä voimme pitää kodit ja toimitilat puhtaina ja viihtyisinä.</p>
        
        <p>Ota yhteyttä meihin tänään ja pyydä ilmainen tarjous siivouspalveluistamme!</p>`,

    en: `
        <p>Welcome to our cleaning company in 2023! We are proud to offer high-quality and reliable cleaning services that help our customers keep their homes and offices clean and comfortable.</p>

        <p>Our skilled cleaners are trained and experienced, so you can be sure they will handle the cleaning tasks quickly and efficiently. We use only environmentally friendly and safe cleaning products, so you can rest assured that your home or office is safe and clean.</p>
        
        <p>We offer a wide range of cleaning services, including regular home and office cleaning, window cleaning, floor waxing, and carpet cleaning. You can also request customized cleaning services that specifically meet your needs.</p>
        
        <p>Customer satisfaction is very important to us, and we always strive to provide the best possible service and exceed our customers' expectations. Together, we can keep homes and offices clean and comfortable.</p>
        
        <p>Contact us today and request a free quote for our cleaning services!</p>`,
  },

  'price-for-sofas': {
    fi: 'Kahden istuttava',
    en: 'Sofa cleaning',
  },
  '2-sofa': {
    fi: 'Kahden istuttava 120.00 €',
    en: 'Double sofa 120.00 €',
  },
  '3-sofa': {
    fi: 'Kolmen istuttava 160.00 €',
    en: 'Triple sofa 160.00 €',
  },
  '4-sofa': {
    fi: 'Neljän istuttava 185.00 €',
    en: 'Four-seater sofa 185.00 €',
  },
  '5-sofa': {
    fi: 'Viiden istuttava 225.00 €',
    en: 'Five-seater sofa 225.00 €',
  },
  '6-sofa': {
    fi: 'Kuuden istuttava 255.00 €',
    en: 'Six-seater sofa 255.00 €',
  },
  '7-sofa': {
    fi: 'Seitsemän istuttava 280.00 €',
    en: 'Seven-seater sofa 280.00 €',
  },
  '8-sofa': {
    fi: 'Kahdeksan istuttava 305.00 €',
    en: 'Eight-seater sofa 305.00 €',
  },
  'big-sofa': {
    fi: 'Isommille sohville 340.00 €',
    en: 'For large sofas 340.00 €',
  },
  '2-sofa-def': {
    fi: 'Suojakäsittely pesun yhteydessä / sohva 29.00 €',
    en: 'Protective treatment / 2-seater sofa 29.00 €',
  },

  'chairs-ottoman-armchairs-cleaning': {
    fi: 'Pesuhinnasto tuoleille',
    en: 'Dry cleaning of chairs/armchairs/ ottomans',
  },
  'kitchen-chair': {
    fi: 'Keittiön tuolit (kpl) 25.00 €',
    en: 'Kitchen chairs (pcs) 25.00 €',
  },
  ottoman: {
    fi: 'Rahin pesu 40.00 €',
    en: 'Ottoman 40.00 €',
  },
  armchair: {
    fi: 'Nojatuolin pesu 80.00 €',
    en: 'For large sofas 80.00 €',
  },
  'def-armchair': {
    fi: 'Suojakösittely pesun yhteydessä / nojatuoli 19.00 €',
    en: 'Protective treatment / 2-seater sofa 19.00 €',
  },

  bedsbeds: {
    fi: 'Sängyn syväpuhdistus ja pesu',
    en: 'Mattress dry cleaning',
  },
  'single-bed': {
    fi: 'Yhden hengen sänky 80.00 €',
    en: 'Single mattress 80.00 €',
  },
  'double-bed': {
    fi: 'Parisänky 120.00 €',
    en: 'Double mattress 120.00 €',
  },
  'def-bed': {
    fi: 'Suojakäsittely / sänky 39.00 €',
    en: 'Protective treatment / mattress 39.00 €',
  },

  carpets: {
    fi: 'Maton syväpuhdistus ja pesu',
    en: 'Carpets dry cleaning',
  },
  'carpet-1pcs': {
    fi: 'Matto alle 5 m² - 1 kpl 70.00 €',
    en: 'Carpet up to 5m2 - 1 pcs 70.00 €',
  },
  'carpet-2pcs': {
    fi: 'Matto alle 5 m² - 2 kpl 128.00 €',
    en: 'Carpet up to 5m2 - 2 pcs 128.00 €',
  },
  'carpet-3pcs': {
    fi: 'Matto alle 5 m² - 3 kpl 175.00 €',
    en: 'Carpet up to 5m2 - 3 pcs 175.00 €',
  },
  'carpet-4pcs': {
    fi: 'Matto alle 5 m² - 4 kpl 210.00 €',
    en: 'Carpet up to 5m2 - 4 pcs 210.00 €',
  },
  'carpet-5pcs': {
    fi: 'Matto alle 5 m² - 5 kpl 250.00 €',
    en: 'Carpet up to 5m2 - 5 pcs 250.00 €',
  },
  'carpet-6pcs': {
    fi: 'Matto alle 5 m² - 6 kpl 280.00 €',
    en: 'Carpet up to 5m2 - 6 pcs 280.00 €',
  },
  'fitted-carpet-mini': {
    fi: 'Kokolattiamatto alle 100 m² / m² 15.00 €',
    en: 'Fitted carpet up to 100 m² - 1m² 15.00 €',
  },
  'fitted-carpet-big': {
    fi: 'Kokolattiamatto yli 101 m² / m² 13.00 €',
    en: 'Fitted carpet up to 101 m² - 1m² 13.00 €',
  },
  'carpet-def': {
    fi: 'Suojakäsittely matto / m² 5.00 €',
    en: 'Protective treatment/ m² 5.00 €',
  },

  windows: {
    fi: 'Ikkunoiden pesu',
    en: 'Window cleaning',
  },
  studio: {
    fi: 'Yksiö 89.00 €',
    en: 'Studio apartment 89.00 €',
  },
  'one-bedroom': {
    fi: 'Kaksio 129.00 €',
    en: 'One-bedroom apartment 129.00 €',
  },
  'two-bedroom': {
    fi: 'Kolmoi 199.00 €',
    en: 'Two-bedroom apartmen 199.00 €',
  },
  'three-bedroom': {
    fi: 'Neliö 299.00 €',
    en: 'Three-bedroom apartment 299.00 €',
  },

  'car-cleaning': {
    fi: 'Auton penkit',
    en: 'Car seats',
  },
  'car-seats': {
    fi: 'Syväpuhdistus ja pesu paikan päällä 199.00 €',
    en: 'Deep cleaning and washing on site 199.00 €',
  },
};
