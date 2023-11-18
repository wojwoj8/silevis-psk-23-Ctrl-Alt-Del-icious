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
    Attatchment1Serializer,
    AdminDataSerializer
)
from .models import (
    User,
    Attachment1,
    AdminData,
)
from rest_framework.response import Response
from rest_framework.generics import get_object_or_404

# Create your views here.
class TestView(generics.GenericAPIView,
    mixins.ListModelMixin,
    mixins.CreateModelMixin,
    mixins.UpdateModelMixin,
    mixins.DestroyModelMixin,
    ):
    
    serializer_class = Attatchment1Serializer

    def get(self, request, *args, **kwargs):
        
        attachment = get_object_or_404(Attachment1, id=1)
        serializer = self.serializer_class(attachment)
        return Response(serializer.data)
    
    def post(self, request, *args, **kwargs):
        print(request.data)
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        print(serializer.errors)
        return Response(serializer.errors, status=400)
    
class AdminDataView(generics.GenericAPIView,
    mixins.ListModelMixin,
    mixins.CreateModelMixin,
    mixins.UpdateModelMixin,
    mixins.DestroyModelMixin,
    ):
    serializer_class = AdminDataSerializer

    def get(self, request, *args, **kwargs):
        
        attachment = get_object_or_404(AdminData, id=1)
        serializer = self.serializer_class(attachment)
        return Response(serializer.data)
    
    def post(self, request, *args, **kwargs):
        print(request.data)
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        print(serializer.errors)
        return Response(serializer.errors, status=400)