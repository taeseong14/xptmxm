const Krm = require('./krm');
const krm = new Krm();

const json = krm.File.readJSON('data.json');

krm.add('네즈야 [:text] 확률', (msg, reply) => {
    let t = msg.params.text.trim();
    if (json[t] !== undefined) return reply.text('이미 답한적이 잇내뇨,,\n' + json[t] + '퍼센트요');
    const p = krm.Rand.randInt(0, 100);
    reply.text(p + '퍼센트요');
    json[t] = p;
    krm.File.writeJson('data.json', json);
});

let { response } = krm;
