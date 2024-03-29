<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title><c:out value="${category.name}"/></title>
</head>
<body>
	<h1><c:out value="${category.name}"/></h1>
	<p>Products</p>
<%-- 	<ul>
		<c:forEach var="product" items="${products}">
			<li><c:out value="${product.name}"/></li>
		</c:forEach>
	</ul> --%>
 	<form:form action="#" method="post" modelAttribute="category">
		<form:select path="products">
			<c:forEach var="product" items="${productss}">
			<option value="${product.id}">${product.name}</option>
			</c:forEach>
		</form:select>
		<button>Add Product</button>
		</form:form> 
</body>
</html>