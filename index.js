const receivesAFunction = (callback) => {
    callback();
  };
  
  const returnsANamedFunction = () => {
    return function namedFunction() {
      console.log("I am a named function!");
    };
  };
  
  const returnsAnAnonymousFunction = () => {
    return () => {
      console.log("I am an anonymous function!");
    };
  };
  