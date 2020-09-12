from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from posts.models import Post
from posts.serializer import PostSerializer
# Create your views here.

@api_view(['GET','POST','DELETE'])
def all_posts(request):
    if request.method=='GET':
        posts=Post.objects.all()
        title=request.GET.get('title',None)
        if title is not None:
            posts=posts.filter(title_icontains=title)
        post_serializer=PostSerializer(posts, many=True)
        return JsonResponse(post_serializer.data, safe=False)


@api_view(['GET'])
def post(request,pk):
    if request.method=='GET':
        post=Post.objects.get(id=pk)
        post_serializer=PostSerializer(post)
    return JsonResponse(post_serializer.data)    

@api_view(['GET'])
def delete_post(request, pk):
    if request.method=='GET':
        post=Post.objects.get(pk=pk)
        post.delete()
    return JsonResponse({"message":"Deleted SuccessFully"}, status=status.HTTP_204_NO_CONTENT) 

@api_view(['POST'])
def add_post(request):
    if request.method=='POST':
        post=JSONParser().parse(request)
        post_serializer=PostSerializer(data=post)
        if post_serializer.is_valid():
            post_serializer.save()
            return JsonResponse(post_serializer.data, status=status.HTTP_201_CREATED)
    return JsonResponse(post_serializer.errors, status=status.HTTP_400_BAD_REQUEST)    