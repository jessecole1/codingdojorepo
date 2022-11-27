select * from users;
insert into users (first_name, last_name, email, created_at, updated_at)
values ('Jesse','Cole','jesse@gmail.com', now(), now());
select * from users where id = 1