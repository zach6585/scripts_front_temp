Whole project:

1) Make changes as needed 
    - See spreadsheet
2) Need to make it start up faster
3) Comment thing



    

Extras: 
     
    - Finish up the "last user" stuff
        - So we have two things: We have the last page and script, which should be tied to the mentee, and we have the last mentee, which could be something we have saved to the user but in actuality, I think it should be something saved to the session rather than the db so that it will keep it on reload. This is very much secondary and I might just not even do it





Notes:

- I was able to save body image as a png, hopefully that is sufficient

- On page 13 of Script 2 there says something about a link at the very bottom (The word "week" is highlighted/has a comment on it). Did you decide on what you want there/should it be a textbox?
- Slight problem with textboxes. The issue is that when it first is written in, it posts, but if the user types quickly, the following keys will not be registered as patches and therefore only the first keystroke will be recognized. One solution could be to make it so that we default, on mentee making, every textarea to ''. This would be a decent option but somewhat slow. The amount of time to actually make this work won't be much at all. The second option would be to make it so that we don't upload it on every key click but instead on stopping key clicks. Not really sure how I would do that but maybe it would be something like what Lucas and I did (well what Lucas did lol) where we detect time between key presses. Only problem with this is that if they're very slow typers, that would create a problem. Honestly first solution seems like the best one. So I'm noticing that for some reason this only seems to happen when the textboxes occur within child components. I'm not sure why but fortunately we could just have a third option which is just make them their own components in their own files. With that being the case, we won't have issues about this stuff which would solve the problem!








