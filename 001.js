/*
정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

for in문은 값이 아닌 index를 반환함
for문에서는 i++을 마지막에 적어야 함
j를 i보다 1 큰 숫자부터 시작하게 하면 첫번째 if문을 쓸 필요가 없음
*/
function solution(numbers) {
    var answer = [];
    for(var i=0; i<numbers.length; i++) {
        for(var j=0; j<numbers.length; j++) {
            if(i !== j) {
                let sum = numbers[i]+ numbers[j];
                if(!answer.includes(sum)){ //sum을 포함하고 있다면 true 반환
                    answer.push(sum); // 배열에 값 추가
                }
            }
        }
    }
    answer.sort(function(a, b){
        return a-b;
    })

    return answer;
}

// BEST 풀이
function solution(numbers) {
    const temp = []

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            temp.push(numbers[i] + numbers[j])
        }
    }

    const answer = [...new Set(temp)]
    // ...(spread operater) : 배열 펼치기
    // Set(array): 중복값 제외하고 배열 만들기

    return answer.sort((a, b) => a - b) // =>로 간략화
}
