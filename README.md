Yee

Notes for cron job thing:
    - All <a> tags need to have their links be softcoded and pulled from the google sheets
        - This means every textbox needs to have an id so we can know which one to push to
        - On top of that, we need to make action and reducer additions that reassign the links
    - It could be lazy and just reassign every night/day/etc. using a cron job or we could go through the effort of doing a comparison to determine if the cron job is needed. Ultimately, the first one seems easier but who knows.