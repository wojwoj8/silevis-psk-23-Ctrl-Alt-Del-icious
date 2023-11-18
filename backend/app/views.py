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
    Attachment1Serializer,
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
    
    serializer_class = Attachment1Serializer

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
        
        existing_instance = AdminData.objects.exists()

        if existing_instance:
            return Response({"error": "Data already exists. Cannot create a new instance."},
                            status=status.HTTP_400_BAD_REQUEST)

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def put(self, request, *args, **kwargs):
        
        try:
            instance = get_object_or_404(AdminData, id=1)

        except self.serializer_class.Meta.model.DoesNotExist:
            return Response(
                {"error": f"{self.serializer_class.Meta.model.__name__} not found"},
                status=status.HTTP_404_NOT_FOUND,
            )

        serializer = self.serializer_class(instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    
class UserPanelView(generics.GenericAPIView,
                    mixins.ListModelMixin,
                    mixins.CreateModelMixin,
                    mixins.UpdateModelMixin,
                    mixins.DestroyModelMixin):
    
    serializer_class = Attachment1Serializer
    queryset = Attachment1.objects.all()  # Add this line to get all instances

    def get(self, request, *args, **kwargs):
        attachments = self.get_queryset()  # Use get_queryset() to get all instances
        serializer = self.serializer_class(attachments, many=True)
        return Response(serializer.data)
    
    def post(self, request, *args, **kwargs):
        print(request.data)
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        print(serializer.errors)
        return Response(serializer.errors, status=400)