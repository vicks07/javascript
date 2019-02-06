Topic = function(){
  this.subTopic = [];
}

Topic.prototype.addChild = function(subTopicValue){
		this.subTopic.push(subTopicValue);
}


let list = [{id:1,topic:'C',subTopic:'C1'},{id:2,topic:'C',subTopic:'C2'},
{id:3,topic:'C',subTopic:'C3'},
{id:4,topic:'C++',subTopic:'C++1'},
{id:5,topic:'C++',subTopic:'C++2'}];

let topicCheck = {}; 
    list.forEach((doc)=>{    
     console.log(topicCheck);
      		if(!topicCheck[doc.topic]){
            topic = new Topic();
            topicCheck[doc.topic] = topic;            
          }
          else{
          	topic = topicCheck[doc.topic];           
          }
          topic.addChild({id:doc.id,subTopic:doc.subTopic});        
    });
console.log(topicCheck);