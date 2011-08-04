
/**
 * @author Rudogma(mihail.savinov@gmail.com)
 */

var levenshtein = function(s1, s2){
	function range(from, to, v){
		var r=[];
		for(var i=from; i<=to; i++){ r[i]= (v == undefined) ? i : v; }
		return r;
	}
	
	var prev = range(0, s2.length);
	var curr = range(0, s2.length, 0);

    for( var colIndex =1; colIndex <= s1.length; colIndex ++){
      var a1 = s1[colIndex-1];
      curr[0] = colIndex;

      for(var i =1; i<curr.length; i++){
        var m = (a1 == s2[i-1]) ? 0 : 1;

        curr[i] = Math.min ( prev[i]+1,
                    Math.min(curr[i-1]+1, prev[i-1] + m)
                  );
      }

      var t = prev;
      prev = curr;
      curr = t;
    }

    return prev[prev.length-1];
};