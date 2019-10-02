//create a synth and connect it to the master output (your speakers)
var synth = new Tone.Synth().toMaster()

//travis websocket
var ws = new WebSocket("wss://travis.durieux.me")

//listen to travis data
ws.onmessage = function (eventCi) {
	console.log(eventCi.data);
	synth.triggerAttack(eventCi);

}

//start/stop the transport
document.querySelector('#melody').addEventListener('change', e => Tone.Transport.toggle())

