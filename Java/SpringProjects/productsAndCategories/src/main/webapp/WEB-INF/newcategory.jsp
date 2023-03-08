<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Create Category</title>
</head>
<body>
	<h1>New Category</h1>
	<a href="/">Home</a>
	<form:form action="/category/new" method="post" modelAttribute="category">
	<form:label path="name">Name</form:label>
	<form:input type="text" path="name"/>
	<button>Create</button>
	</form:form>
</body>
</html>