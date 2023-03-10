![progress-banner](https://app.codecrafters.io/progress/redis/268b5a1d-69e1-46eb-b866-211030fd5d0e)

This is a starting point for JavaScript solutions to the
["Build Your Own Redis" Challenge](https://codecrafters.io/challenges/redis).

In this challenge, you'll build a toy Redis clone that's capable of handling
basic commands like `PING`, `SET` and `GET`. Along the way we'll learn about
event loops, the Redis protocol and more.

**Note**: If you're viewing this repo on GitHub, head over to
[codecrafters.io](https://codecrafters.io) to try the challenge.

# Passing the first stage

The entry point for your Redis implementation is in `app/main.js`. Study and
uncomment the relevant code, and push your changes to pass the first stage:

```sh
git add .
git commit -m "pass 1st stage" # any msg
git push origin master
```

That's all!

# Stage 2 & beyond

Note: This section is for stages 2 and beyond.

1. Ensure you have `node (16)` installed locally
1. Run `./spawn_redis_server.sh` to run your Redis server, which is implemented
   in `app/main.js`.
1. Commit your changes and run `git push origin master` to submit your solution
   to CodeCrafters. Test output will be streamed to your terminal.

# Stage 3
In this stage, you'll respond to multiple PING commands sent by the same connection.

# Stage 4
In this stage, your server will need to handle multiple concurrent clients. Just like the previous stages, all clients will only send PING commands for now.

# State 5
In this stage, you'll respond to the ECHO command.

The client will send you the command as a RESP array, which looks something like this:

```*2\r\n$4\r\nECHO\r\n$3\r\nhey\r\n```
