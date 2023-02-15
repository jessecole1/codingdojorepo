<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Dorms</title>
</head>
<body>
	<h1>Dorms</h1>
	<p>
		<a href="/new/dorm">Add a new dorm</a>
	</p>
	<p>
		<a href="/new/student">Add a new student</a>
	</p>
	<table>
		<thead>
			<tr>
				<th>Dorm</th>
				<th>Action</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="dorm" items="${dorms}">
			<tr>
				<td>${dorm.name}</td>
				<td><a href="/dorm/students/${dorm.id}">See Students</a></td>
			</tr>
			</c:forEach>
		</tbody>
	</table>
</body>
</html>