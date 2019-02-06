# A javascript code to merge array of objects.
Ex:
>If the array of objects of the given format.
 [{id:1,topic:'C',subTopic:'Introduction'},
  {id:2,topic:'C',subTopic:'Data Types'},
  {id:3,topic:'C',subTopic:'Functions'},
  {id:4,topic:'C++',subTopic:'Introduction'},
  {id:5,topic:'C++',subTopic:'Data Types'}]
  
  ##And the required format is something of this order
  
 >  "C": {
        "subTopic": [
            {
                "id": "1",
                "name": "Introduction"
            },
            {
                "id": "2",
                "name": "Data Types"
            },....
        ]
    } ...
    
    
