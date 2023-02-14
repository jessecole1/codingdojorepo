<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>One Dojo</title>
</head>
<body>
	<table>
		<thead>
			<th>First Name</th>
			<th>Last Name</th>
			<th>Age</th>
		</thead>
		<tbody>
 			<c:forEach var="ninja" items="${dojo.ninjas}">
			<tr>
				<td><c:out value="${ninja.firstName}"/></td>
				<td><c:out value="${ninja.lastName}"/></td>
				<td><c:out value="${ninja.age}"/></td>
			</tr>
			</c:forEach>
		</tbody>
	</table>
</body>
</html>