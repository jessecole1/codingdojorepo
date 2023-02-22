<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Edit Book</title>
</head>
<body>
	<h1>Edit a Book from Your Shelf, <c:out value="${user.name}"/></h1>
	<form:form action="/one/book/edit/${book.id}" method="put" modelAttribute="book">
<!--  	<input type="hidden" name="_method" value="put"> -->
 	<form:input type="hidden" path="user" value="${user.id}"/>
	<table>
		<tbody>
			<tr>
				<td><form:label path="title">Title:</form:label>
				<form:errors path="title" style="color:red"/></td>
				<td><form:input path="title" type="text"/></td>
			</tr>
			<tr>
				<td><form:label path="author">Author:</form:label>
				<form:errors path="author" style="color:red"/></td>
				<td><form:input path="author" type="text"/></td>
			</tr>
			<tr>
				<td><form:label path="thoughts">My thoughts:</form:label>
				<form:errors path="thoughts" style="color:red"/></td>
				<td><form:textarea path="thoughts"/>
			</tr>
		</tbody>
	</table>
	<button>Submit</button>
	</form:form>
	<p><a href="/dashboard">Back Home</a>
</body>
</html>