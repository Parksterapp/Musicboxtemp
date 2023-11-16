{% extends "base.html" %}

{% block content %}
  <!-- Add the username of the user -->
  <h1>{{ user.username }}</h1>
  <!-- Add the email of the user -->
  <p>Email: {{ user.email }}</p>
  <!-- Add the password of the user -->
  <p>Password: {{ user.password }}</p>
  <!-- Add the subscription of the user -->
  <p>Subscription: {{ user.subscription }}</p>
  <!-- Add the rating of the user -->
  <p>Rating: {{ user.rating }}</p>
  <!-- Add the event of the user -->
  <h2>Event</h2>
  <p><a href="{{ url_for('event_detail', event_id=user.event.id) }}">{{ user.event.title }}</a></p>
{% endblock %}
