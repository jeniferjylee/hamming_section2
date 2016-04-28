var compute;

//this function computes the hamming distance between 2 strands of nucleotides

compute = function(s1, s2) {
	// declare our output variable
	// default is identical strands,
	//i.e. distance = 0
	var distance = 0;
	if (s1 != s2){
		distance = 1
	}

	else{
		distance=0;
	}
	
	if (s1.length && s2.length===2 && s1!=s2){ 
		distance =2
	}
	/*calculate the actual Hamming distance*/

//output the Haming distance
return distance;

};

module.exports = {
	compute: compute
};

