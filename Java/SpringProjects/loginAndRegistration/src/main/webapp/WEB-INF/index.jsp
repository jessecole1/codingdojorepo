<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Home Page</title>
</head>
<body>
	<h1>Welcome!</h1>
	<p>Join our growing community.</p>
	<div>
		<h2>Register</h2>
		<div>
			<form:form action="/register" method="post" modelAttribute="newUser">
				<table>
					<tbody>
						<tr>
							<td><form:label path="userName">Username</form:label></td>
							<td><form:input path="userName" type="text"/></td>
						</tr>
						<tr>
							<td><form:label path="email">Email</form:label></td>
							<td><form:input path="email" type="text"/></td>
						</tr>
						<tr>
							<td><form:label path="password">Password</form:label></td>
							<td><form:input path="password" type="password"/></td>
						</tr>
						<tr>
							<td><form:label path="confirm">Confirm Password</form:label></td>
							<td><form:input path="confirm" type="password"/></td>
						</tr>
					</tbody>
				</table>
				<p>
					<button>Submit</button>
				</p>
			</form:form>
		</div>
		<h2>Login</h2>
		<div>
			<form:form action="/login" method="post" modelAttribute="newLogin">
				<table>
					<tbody>
						<tr>
							<td><form:label path="email">Email</form:label></td>
							<td><form:input path="email" type="text"/></td>
						</tr>
						<tr>
							<td><form:label path="password">Password</form:label></td>
							<td><form:input path="password" type="password"/></td>
						</tr>
					</tbody>
				</table>
				<p>
					<button>Submit</button>
				</p>
			</form:form>
		</div>
	</div>
</body>
</html>