function solution(id_list, report, k) {
    let answer = [];
    let new_report = [...new Set(report)]; // 중복 신고를 제외한 리스트
    let reporter = []; // 신고한 유저
    let reported = []; // 신고된 유저
    let banned = [];   // 정지된 유저

    // answer 배열 초기화
    for(i in id_list){
        answer[i] = 0;
    }

    // 신고한 유저-신고된 유저 리스트 분리
    for(i in new_report) {
        reporter.push(new_report[i].split(" ")[0]); //신고한 유저
        reported.push(new_report[i].split(" ")[1]); //신고된 유저
    }

    // 정지 횟수 이상 신고 당한 유저 찾기
    for (let i=0; i<reported.length; i++){
        let kk = 1;
        for (let rep of reported) {
            let idx = reported[i].indexOf(rep);
            while( idx != -1){
                kk += 1;
                idx = reported[i].indexOf(rep, idx+1);
                if(kk > k) {
                    banned.push(reported[i]);
                    break;
                }
            }
        }
    }

    if(banned.length == 0){
        return answer;
    }

    // 중복 제외한 정지 당한 유저 리스트 생성
    let result_report = [...new Set(banned)];

    for(res of result_report){
        let idx = reported.indexOf(res);    // 신고된 유저 리스트에서 정지 당한 유저의 인덱스 찾기
        while( idx != -1 ) {
            for(let i in id_list){
                if(id_list[i] == reporter[idx]){
                    answer[i] += 1;
                }
            }
           idx = reported.indexOf(res, idx+1);
        }
    }
    return answer;
}
