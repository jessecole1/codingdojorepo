<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Login Page</title>
</head>
<body>
	<h1>Book Club</h1>
	<p>A place to for friends to share thoughts on books.</p>
	<div>
		<h2>Register</h2>
		<form:form action="/register" method="post" modelAttribute="newUser">
		<table>
			<tbody>
				<tr>
					<td><form:label path="name">Name:</form:label>
					<form:errors path="name"/>
					<td><form:input type="text" path="name"/>
				</tr>
				<tr>
					<td><form:label path="email">Email:</form:label>
					<form:errors path="email"/>
					<td><form:input type="text" path="email"/>
				</tr>
				<tr>
					<td><form:label path="password">Password:</form:label>
					<form:errors path="password"/>
					<td><form:input type="password" path="password"/>
				</tr>
				<tr>
					<td><form:label path="confirm">Confirm:</form:label>
					<form:errors path="confirm"/>
					<td><form:input type="password" path="confirm"/>
				</tr>
			</tbody>
		</table>
		<button>Register</button>
		</form:form>
	</div>
	<div>
 		<form:form action="/login" method="post" modelAttribute="newLogin">
		<table>
			<tbody>
				<tr>
					<td><form:label path="email">Email:</form:label>
					<form:errors path="email"/>
					<td><form:input type="text" path="email"/>
				</tr>
				<tr>
					<td><form:label path="password">Password:</form:label>
					<form:errors path="password"/>
					<td><form:input type="password" path="password"/>
				</tr>
			</tbody>
		</table>
		<button>Login</button>
		</form:form>
	</div>
</body>
</html>