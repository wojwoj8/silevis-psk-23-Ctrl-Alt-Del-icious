from django.shortcuts import render
from rest_framework import (
    viewsets,
    views,
    status,
    generics,
    mixins,
    authentication,
    permissions,
)
from .serializer import (
    Attatchment1Serializer
)
from .models import (
    User,
    Attachment1
)
from rest_framework.response import Response
from rest_framework.generics import get_object_or_404

# Create your views here.
class TestView(generics.ListAPIView):
    
    serializer_class = Attatchment1Serializer

    def get(self, request, *args, **kwargs):
        
        attachment = get_object_or_404(Attachment1, id=1)
        serializer = self.serializer_class(attachment)
        return Response(serializer.data)