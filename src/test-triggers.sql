update "user" 
  set "firstName" = 'Jefferson Luis' 
where "firstName" = 'Jefferson'

update "user" 
  set active = false 
where "firstName" = 'Jefferson'

select * from "user"