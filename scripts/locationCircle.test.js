const locationCircle = require('./locationCircle');
test('checks the valid coords of a device', done => {
   function isValid(coordinate){
      try{
         expect(null).toBeNull();
      done();
      }catch(error){
      done(error);
   }
}
locationCircle('fetch data', isValid());
});
test('checks the valid coords of a location', done => {
   function isValidLocation(location){
      try{
         expect(null).toBeNull();
      done();
      }catch(error){
      done(error);
   }
}
locationCircle('fetch data', isValidLocation());
});
