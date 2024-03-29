
async function notifyCustomer() {
  try {
    const customer =  await getCustomer(1);
    console.log('Customer: ', customer);
    if(customer.isGold) {
      const movies = await getTopMovies();
      console.log(movies);
      const email = await sendEmail(customer.email ,movies);
      console.log('Email sent...');
    }

  } catch (error) {
    console.log('Error: ', error.message);
  }
} 
notifyCustomer();

function getCustomer(id) {
  return new Promise((resolve, reject) => {
    console.log('Getting Customer');
    setTimeout(() => {
      resolve({ 
        id: 1, 
        name: 'Mosh Hamedani', 
        isGold: true, 
        email: 'email' 
      });
    }, 4000); 
  });
 
}

function getTopMovies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting Top Movies");
      resolve(['movie1', 'movie2']);
    }, 4000);
  })

}

function sendEmail(email, movies) {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      console.log('Sending Email');
      resolve();
    }, 4000);
  })

}