<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title> Book</title>
</head>
<body>
	<h1><c:out value="${book.title}"/></h1>
	<c:choose>
		<c:when test="${theBookUser == user.id}">
			<p> You read <c:out value="${book.title}"/> by <c:out value="${book.author}"/></p>
			<p> Here are your thoughts: </p>
		</c:when>
		<c:otherwise>
			<p><c:out value="${book.user.name}"/> read <c:out value="${book.title}"/> by <c:out value="${book.author}"/></p>
			<p>Here are <c:out value="${book.user.name}"/>'s thoughts:</p>
		</c:otherwise>
	</c:choose>
	<div>
		<p>
			<c:out value="${book.thoughts}"/>
		</p>
	</div>
 	<c:choose>
		<c:when test="${theBookUser == user.id}">
			<p><a href="/one/book/edit/${book.id}">Edit Book</a></p>
			<p>
				<form action="/one/book/delete/${book.id}" method="post">
					<input type="hidden" name="method" value="delete"/>
					<input type="submit" name="method" value="Delete"/>
				</form>
			</p>
	
			<p><a href="/one/book/delete/${book.id}">Delete Book</a></p>
	
		</c:when>

		<c:otherwise>
		</c:otherwise>
	</c:choose> 
	<p><a href="/dashboard">Back Home</a></p>
	
	<%-- THE BELOW WAS FOR TESTING --%> 
<%-- 	<p><c:out value="${theBookUser}"/></p>
	<p><c:out value="${user.id}"/></p> --%>
</body>
</html>