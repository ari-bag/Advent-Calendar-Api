(this["webpackJsonpquestion-game-client"]=this["webpackJsonpquestion-game-client"]||[]).push([[0],{31:function(e,t,n){e.exports=n(60)},36:function(e,t,n){},37:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(27),o=n.n(r),i=(n(36),n(37),n(1)),l=n(7);function c(){return s.a.createElement("div",{className:"splash-screen"},s.a.createElement("h1",null,"A ",s.a.createElement("span",{className:"dnd"},"D&D")," 5ed QUIZ"),s.a.createElement("p",null,"Adventurer, test your knowledge in this game plenty of misterious questions and reveal your destiny"),s.a.createElement(l.b,{className:"start-btn",to:"/game"},"Start Game"))}var u=n(9),m=n(10),d=n(12),p=n(11),h=n(30),y=n(29),g=n.n(y),w=s.a.createContext(),f=w.Consumer,E=w.Provider;function v(e){return function(t){return s.a.createElement(f,null,(function(n){return s.a.createElement(e,Object.assign({},t,{questions:n.questions,oneQuestion:n.oneQuestion,answeredQuestions:n.answeredQuestions,points:n.points,style:n.style,isAnswered:n.isAnswered,showButton:n.showButton,getAllQuestions:n.getAllQuestions,getRandomQuestion:n.getRandomQuestion,morePoints:n.morePoints,isCorrect:n.isCorrect,nextQuestion:n.nextQuestion,restartGame:n.restartGame}))}))}}var Q=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={questions:[],oneQuestion:{},answeredQuestions:[],points:0,style:["answer","answer","answer"],isAnswered:!1,showButton:!1},e.getAllQuestions=function(){g.a.get("https://dnd-quiz-game.herokuapp.com/api").then((function(t){e.setState({questions:t.data}),e.getRandomQuestion()})).catch((function(e){return console.log(e)}))},e.getRandomQuestion=function(){for(var t=e.state,n=t.questions,a=t.answeredQuestions,s=n[Math.floor(Math.random()*n.length)],r=0;r<n.length;r++){var o=a.some((function(e){return e._id===s._id}));if(0!==a.length&&o)return e.getRandomQuestion();var i=Object(h.a)(a);i.push(s),e.setState({oneQuestion:s,answeredQuestions:i});break}},e.morePoints=function(){var t=e.state,n=t.oneQuestion,a=t.points;a+=n.points,e.setState({points:a})},e.isCorrect=function(t){var n=e.state,a=n.style,s=n.isAnswered,r=n.oneQuestion,o=n.showButton;if(!s){var i=a;t===r.correctAnswer?(i[t]+=" correct",e.morePoints()):i[t]+=" incorrect",e.setState({isAnswered:!s,style:i,showButton:!o})}},e.nextQuestion=function(){var t=e.state,n=t.isAnswered,a=t.showButton;e.setState({isAnswered:!n,showButton:!a,style:["answer","answer","answer"]}),e.getRandomQuestion()},e.restartGame=function(){e.setState({questions:[],oneQuestion:{},answeredQuestions:[],points:0,style:["answer","answer","answer"],isAnswered:!1,showButton:!1})},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state,t=e.questions,n=e.oneQuestion,a=e.answeredQuestions,r=e.points,o=e.style,i=e.isAnswered,l=e.showButton,c=this.getAllQuestions,u=this.getRandomQuestion,m=this.morePoints,d=this.isCorrect,p=this.nextQuestion,h=this.restartGame;return s.a.createElement(E,{value:{questions:t,oneQuestion:n,answeredQuestions:a,points:r,style:o,isAnswered:i,showButton:l,getAllQuestions:c,getRandomQuestion:u,morePoints:m,isCorrect:d,nextQuestion:p,restartGame:h}},this.props.children)}}]),n}(s.a.Component),b=v(function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.props.getAllQuestions()}},{key:"render",value:function(){var e=this,t=this.props,n=t.oneQuestion,a=t.questions,r=t.answeredQuestions,o=t.points,i=t.style,c=t.showButton,u=r.length,m=a.length;return s.a.createElement("div",{className:"question-container"},s.a.createElement("div",{className:"red-container"},s.a.createElement("div",{className:"points"},s.a.createElement("p",null,"Points: ",o)),s.a.createElement("div",{className:"white-container"},s.a.createElement("p",{className:"number-question"},"Question ",u," / ",m),s.a.createElement("p",{className:"theQuestion"},n.question),s.a.createElement("img",{src:n.picture,alt:"Random gif that makes you laugh"}))),s.a.createElement("div",{className:"answers-container"},s.a.createElement("p",null,"Select the correct answer"),s.a.createElement("ol",null,n.question&&n.answers.map((function(t,n){return s.a.createElement("li",{key:n},s.a.createElement("button",{onClick:function(){return e.props.isCorrect(n)},className:i[n]},t))}))),c?s.a.createElement("div",{className:"next-btn"},u===m?s.a.createElement(l.b,{to:"/end",className:"finish"},"Finish quiz!"):s.a.createElement("button",{onClick:this.props.nextQuestion},"\u27a1")):null))}}]),n}(a.Component)),N=v(function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props,t=e.points,n=e.restartGame;return s.a.createElement("div",{className:"end-container"},s.a.createElement("div",{className:"endScreen"},s.a.createElement("p",{className:"final-score"},"Your score: ",t),t<=50?s.a.createElement("div",null,s.a.createElement("img",{src:"https://res.cloudinary.com/dywatr6gy/image/upload/v1592212060/DnD/26488B41-010D-4A17-A093-D10C4ECC62B4_ryyifk.png",alt:"An npc face",className:"image-type"}),s.a.createElement("h3",{className:"type"},"You are an NPC!"),s.a.createElement("p",{className:"funny-text"},"Hey! At least you exist.")):t>50&&t<=100?s.a.createElement("div",null,s.a.createElement("img",{src:"https://res.cloudinary.com/dywatr6gy/image/upload/v1592213918/DnD/9ece767ba78291f07e1921dca469a0de_orpo6s.jpg",alt:"Female and male adventurer",className:"image-type"}),s.a.createElement("h3",{className:"type"},"You are an adventurer!"),s.a.createElement("p",{className:"funny-text"},"You started a journey full of surprises and perils. Only destiny knows what you will encounter.")):t>100&&t<=150?s.a.createElement("div",null,s.a.createElement("img",{src:"https://res.cloudinary.com/dywatr6gy/image/upload/v1592213920/DnD/2a29bf496a26823dd910500ac476019e_ytnl2b.jpg",alt:"Old mage",className:"image-type"}),s.a.createElement("h3",{className:"type"},"You are a wielder of knowledge!"),s.a.createElement("p",{className:"funny-text"},"You surpassed a lot of perils and forged a name. Bards sing your adventures.")):t>150?s.a.createElement("div",null,s.a.createElement("img",{src:"https://res.cloudinary.com/dywatr6gy/image/upload/v1592213921/DnD/e1962e90f6814bda054e8c0888aee6e7_slbdwf.jpg",alt:"Game Master",className:"image-type"}),s.a.createElement("h3",{className:"type"},"Are you a DM?"),s.a.createElement("p",{className:"funny-text"},"I'm impress! Only people with this knowledge can be a DM. Continue sharing your stories with everyone.")):void 0,s.a.createElement(l.b,{onClick:function(){return n()},className:"try-btn",to:"/"},"Try again?")))}}]),n}(a.Component));var A=function(){return s.a.createElement("div",{className:"main"},s.a.createElement(i.c,null,s.a.createElement(i.a,{exact:!0,path:"/",component:c}),s.a.createElement(i.a,{path:"/game",component:b}),s.a.createElement(i.a,{path:"/end",component:N})))};o.a.render(s.a.createElement(l.a,null,s.a.createElement(Q,null,s.a.createElement(A,null))),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.81bb1507.chunk.js.map