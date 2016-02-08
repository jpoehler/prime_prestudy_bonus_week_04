  function funA (a) {
	var a = a * 5;
	return a;
  }
  function funB (b) {
	var b = b + 8;
	return b;
  }
  function funC (c) {
	var c = c - 4;
	return c;
	
  }
  function funZ(x, y) {
     var z = x * y;
     return [funA, funB, z];

  }