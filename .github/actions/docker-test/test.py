import os
print ("Hello World")
print(os.environ['INPUT_BUCKET_NAME'])
print(os.environ['INPUT_AWS_REGION'])
with open(os.environ['GITHUB_OUTPUT'], 'a') as gh_output:
    print(f'DOCKER_OUTPUT_01=alabala', file=gh_output)

