insert into users (first_name, last_name, created_at, updated_at)
values ('Amy','Giver',now(),now()),('Big','Bird',now(), now()),('Eli','Byers',now(), now()),('Kermit','The Frog', now(), now()),('Marky','Mark', now(), now()),('Jesse','Cole', now(), now());
insert into friendships (user_id, friend_id)
values (1,2),(1,4),(1,6);
update friendships 
set created_at = now(), updated_at = now()
where id = 3;
select * from friendships;
insert into friendships (user_id, friend_id)
values (2,1),(2,3),(2,5);
insert into friendships (user_id, friend_id, created_at, updated_at)
values (3,2, now(), now()),(3,5, now(), now());
insert into friendships (user_id, friend_id, created_at, updated_at)
values (4,3,now(),now());
insert into friendships (user_id, friend_id, created_at, updated_at)
values (5,1,now(),now());
insert into friendships (user_id, friend_id, created_at, updated_at)
values (5,6,now(),now());
insert into friendships (user_id, friend_id, created_at, updated_at)
values (6,2,now(),now()),(6,3,now(),now());
select users.first_name as first_name, users.last_name as last_name, user2.first_name as friend_first_name, user2.last_name as friend_last_name from users
join friendships on users.id = friendships.user_id
left join users as user2 on user2.id = friend_id;
select users.first_name, users.last_name, friendships.user_id, user2.first_name as friend_first_name, user2.last_name as friend_last_name, friendships.friend_id from users
join friendships on users.id = user_id
left join users as user2 on friend_id = user2.id
where friend_id = 1;
