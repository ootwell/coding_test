function solution(numbers) {
    var answer = [];
    for(var i=0; i<numbers.length; i++) {
        for(var j=0; j<numbers.length; j++) {
            if(i !== j) {
                let sum = numbers[i]+ numbers[j];
                if(!answer.includes(sum)){
                    answer.push(sum);
                }
            }
        }
    }
    answer.sort(function(a, b){
        return a-b;
    })

    return answer;
}
